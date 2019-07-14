import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { joinAsync } from '../../reducers/user';

const Join = () => {
    const [email, inputEmail] = useState('');
    const [nick, inputNick] = useState('');
    const [name, inputName] = useState('');
    const [password, inputPassword] = useState('');
    const [passwordConfirm, inputPasswordConfirm] = useState('');

    const dispatch = useDispatch();

    return (
        <div>
            <Form onSubmit={(e) => {e.preventDefault(); joinAsync({ email, nick, name, password, passwordConfirm}, dispatch)}}>
                <Typography.Title>Signup</Typography.Title>
                <Form.Item>
                    <Input placeholder='Email' type='email' value={email} onChange={(e) => inputEmail(e.target.value)}/>
                </Form.Item>
                <Form.Item>
                    <Input placeholder='Nick' value={nick} onChange={(e) => inputNick(e.target.value)}/>
                </Form.Item>
                <Form.Item>
                    <Input placeholder='Name' value={name} onChange={(e) => inputName(e.target.value)}/>
                </Form.Item>
                <Form.Item>
                    <Input placeholder='Password' type='password' value={password} onChange={(e) => inputPassword(e.target.value)}/>
                </Form.Item>
                <Form.Item>
                    <Input placeholder='Password Confirm' type='password' value={passwordConfirm} onChange={(e) => inputPasswordConfirm(e.target.value)}/>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>Login</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Join;