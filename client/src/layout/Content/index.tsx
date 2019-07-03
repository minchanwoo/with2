import { Layout } from 'antd';
import React from 'react';
import { Route } from 'react-router-dom';

import routes from '../routes';

const Content = () => (
    <Layout.Content style={{ padding: '50px 50px 0 50px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 600 }}>
        {routes.map((route, i) => (
            <Route
                key={i}
                path={route.path}
                component={route.component}
                exact={route.exact} />
            ))}
        </div>
    </Layout.Content>
)

export default Content;