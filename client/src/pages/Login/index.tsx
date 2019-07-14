import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { loginAsync } from '../../reducers/user';

const Login = (props: any) => {
    const [email, inputEmail] = useState('');
    const [password, inputPassword] = useState('');

    const dispatch = useDispatch();

    return (
        <div>
            <Typography.Title>
                Login
            </Typography.Title>
            <Form onSubmit={(e) => {
                e.preventDefault(); 
                loginAsync(email, password, dispatch);
                props.history.push('/');    
            }}>
                <Form.Item>
                    <Input placeholder='Email' type='email' value={email} onChange={(e) => inputEmail(e.target.value)}/>
                </Form.Item>
                <Form.Item>
                    <Input placeholder='Password' type='password' value={password} onChange={(e) => inputPassword(e.target.value)}/>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>Login</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;