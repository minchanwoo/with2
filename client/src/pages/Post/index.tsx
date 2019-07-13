import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostAsync } from '../../reducers';
import { StateType } from '../../reducers/types';
import { Button, Empty } from 'antd';

const Post = (props:any) => {
    const { match: { params : { id } } } = props;

    const post = useSelector((state: StateType) => state.post);

    const dispatch = useDispatch();
    
    useEffect(() => {
        getPostAsync(Number(id), dispatch);
    }, []);

    return (
        <div>
            <Button type='dashed' size='small'>
                <Link to='/posts'>목록</Link>
            </Button>
            {post.error 
                ? <div><Empty /></div>
                : <div>
                    <span>{post.title}</span><span style={{float: 'right'}}>{post.user.name}</span>
                    <hr/>
                    {post.text}
                </div>}
        </div>
        
    );
};

export default Post;