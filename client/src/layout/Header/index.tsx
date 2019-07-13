import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import routes from '../routes';
import { useSelector } from 'react-redux';
import { StateType } from '../../reducers/types';

const Header = ({location: { pathname }}: any) => {
    const nick = useSelector((state: StateType) => state.nick);
    return (
        <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}
                defaultSelectedKeys={[pathname]}
            >
                {routes.filter((route) => {
                    switch (route.menu_type) {
                        case 'MENU':
                            return true;
                        case 'NOT_MENU':
                            return false;
                        case 'LOGGED_IN_MENU':
                            return Boolean(nick);
                        case 'LOGGED_OUT_MENU':
                            return !Boolean(nick);
                        default: 
                            return false;
                    }
                }).map((route) => (
                    <Menu.Item key={route.path}>
                        <Link to={route.path}>{route.header_label}</Link>
                    </Menu.Item>    
                ))}
                {/* {nick && <Menu.Item>로그아웃</Menu.Item>} */}
                <Menu.Item>
                    {nick || '로그인이 필요합니다.'}
                </Menu.Item>
            </Menu>
        </Layout.Header>
    )
}

export default withRouter(Header);