import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPostsAsync } from '../../reducers';
import { Post, StateType } from '../../reducers/types';

const Posts = () => {
    const posts = useSelector((state: StateType) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
       getPostsAsync(dispatch);
    }, []);

    return (
        <div>
            {posts.map((post: Post, key: number) => {
                return <Link to={`/post/${post.id}`} key={key}>
                    <strong>{post.title}</strong>
                    <span>{post.text}</span>
                </Link>
            })}
        </div>
    );
};
export default Posts;