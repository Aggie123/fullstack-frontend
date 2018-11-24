import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const MenuItem=Menu.Item;

class App extends Component {
  render() {
    return (
      <Layout>
      <Header className="header">
      <div className="logo" />
      <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
      >
        <MenuItem key="1"><Link to={'home'}>Home</Link></MenuItem>
        <MenuItem key="2"><Link to={'user-new'}>New User</Link></MenuItem>
        <MenuItem key="3"><Link to={'message-new'}>New Message</Link></MenuItem>
      </Menu>
      </Header>
      <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
      <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
          <MenuItem key="1">option1</MenuItem>
          <MenuItem key="2">option2</MenuItem>
          <MenuItem key="3">option3</MenuItem>
          <MenuItem key="4">option4</MenuItem>
        </SubMenu>
      </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
      {this.props.children}
      </Content>
      </Layout>
      </Layout>
      </Layout>
      );
  }
}

export default App;
