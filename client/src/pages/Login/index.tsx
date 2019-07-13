import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { loginAsync } from '../../reducers';

const Login = () => {
    const [email, inputEmail] = useState('');
    const [password, inputPassword] = useState('');

    const dispatch = useDispatch();

    return (
        <div>
            <Form onSubmit={(e) => {e.preventDefault(); loginAsync(email, password, dispatch);}}>
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