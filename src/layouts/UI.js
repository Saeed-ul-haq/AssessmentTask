import React from 'react'
import { Layout, Menu} from 'antd';
import { LineChartOutlined, TableOutlined,HomeOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';




const UI = ({component}) => {

    const { Header, Content, Footer, Sider } = Layout;
    
    return (
        <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" >
          {/* <img src={logo} /> */}
          </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      <Menu.Item key="1" icon={<HomeOutlined />} >
            <Link to="/">
            HOME
            </Link>
           
        </Menu.Item>
        <Menu.Item key="2" icon={<LineChartOutlined />} >
            <Link to="/statistics">
            COVID-19 Statistics
            </Link>
           
        </Menu.Item>
        <Menu.Item key="3" icon={<TableOutlined />}>
            <Link to="/table">Data Table</Link>
        
        </Menu.Item>
       
        
        
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-sub-header-background headerText" style={{ padding: 0 }} >
      COVID-19 Statistics
          </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          {component}
        </div>
      </Content>
      {/* <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, minHeight: 870 }}> */}
      {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        Content
      </div>
    </Content> */}
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
    );
};

UI.defaultProps = {

    component: ''
}


export default UI;

