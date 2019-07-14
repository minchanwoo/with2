import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostAsync, deletePostAsync } from '../../reducers';
import { StateType } from '../../reducers/types';
import { Button, Empty, Card, Divider, Modal } from 'antd';

const Post = (props:any) => {
    const { match: { params : { id } } } = props;

    const post = useSelector((state: StateType) => state.post);

    const [showModal, switchShowModal] = useState(false);

    const dispatch = useDispatch();
    
    useEffect(() => {
        getPostAsync(Number(id), dispatch);
    }, []);

    return (
        <div>
            {post.error ? <div><Empty /></div>: 
                <div>
                    <Card title={post.title} extra={post.user.name}>
                        <div>
                            {post.text}
                            <Divider dashed />
                            <Button type='dashed' size='small'>
                                <Link to='/posts'>목록</Link>
                            </Button>
                            {post.my && <Button type='dashed' size='small' onClick={() => switchShowModal(true)}>삭제</Button>}
                        </div>
                    </Card>
                    <Modal
                        title='게시글 삭제'
                        visible={showModal}
                        onOk={() => {
                            deletePostAsync(id, dispatch); 
                            switchShowModal(false);
                        }}
                        onCancel={() => switchShowModal(false)}>
                        게시글을 삭제하시겠습니까?
                    </Modal>
                </div>}
        </div>
        
    );
};

export default Post;