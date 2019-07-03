import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import routes from '../routes';

const Header = ({location: { pathname }}: any) => {
    return (
        <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}
                defaultSelectedKeys={[pathname]}
            >
                {routes.filter((route) => route.header_label    ).map((route) => (
                    <Menu.Item key={route.path}>
                        <Link to={route.path}>{route.header_label}</Link>
                    </Menu.Item>    
                ))}
            </Menu>
        </Layout.Header>
    )
}

export default withRouter(Header);