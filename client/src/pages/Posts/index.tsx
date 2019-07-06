import { Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPostsAsync } from '../../reducers';
import { StateType } from '../../reducers/types';

const columns = [
    { title: 'ID', dataIndex: 'id', render: (id: number) => <Link to={`/posts/${id}`}>{id}</Link> },
    { title: '제목', dataIndex: 'title' },
    { title: '작성자명', dataIndex: 'user_name' },
    { title: 'createdAt', dataIndex: 'createdAt' },
];

const Posts = () => {
    const posts = useSelector((state: StateType) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
       getPostsAsync(dispatch);
    }, []);

    return (
        <div>
            <Table columns={columns} dataSource={posts.map((post, key) => ({...post, key, user_name: post.user.name}))}/>
        </div>
    );
};
export default Posts;