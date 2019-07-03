import { Layout } from 'antd';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layout/Header';
import Content from './layout/Content';

const { Footer } = Layout;


const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Header />
        <Content />
        <Footer style={{ textAlign: 'center' }}>With by mcw</Footer>
      </Layout>
    </Router>
  );
}

export default App;
