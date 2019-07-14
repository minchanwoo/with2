import React, { useEffect, useState } from 'react';
import { Typography, Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { StateType } from '../../reducers/types';
import { getPostAsync, editPostAsync } from '../../reducers/post';
import TextArea from 'antd/lib/input/TextArea';

const PostEdit = (props: any) => {
    const { match: { params : { id } } } = props;

    const post = useSelector((state: StateType) => state.post);

    const [title, inputTitle] = useState('');
    const [text, inputText] = useState('');

    const dispatch = useDispatch();
    
    useEffect(() => {
        getPostAsync(Number(id), dispatch);
    }, []);
    
    useEffect(() => {
        inputTitle(post.title);
        inputText(post.text);
    }, [post])
    
    return (
        <div>
            <Typography.Title>
                Edit Post
            </Typography.Title>
            <div>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    editPostAsync(id, { title, text}, dispatch);
                    props.history.push(`/posts/${id}`);
                }}>
                    <Form.Item>
                        <Input value={title} onChange={(e) => inputTitle(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <TextArea value={text} onChange={(e) => inputText(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>저장</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default PostEdit;