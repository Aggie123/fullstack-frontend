import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const MenuItem=Menu.Item;

class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

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
            <MenuItem key='1'>分析平台</MenuItem>
            <MenuItem key="3"><Link to={'/user-new'}>New User</Link></MenuItem>
            {/*<MenuItem key="1"><Link to={'/home'}>Home</Link></MenuItem>
            <MenuItem key="2"><Link to={'/analysis'}>分析</Link></MenuItem>
            <MenuItem key="4"><Link to={'/message-new'}>New Message</Link></MenuItem>*/}
          </Menu>
        </Header>

        <Layout>
          <Sider 
            width={200} 
            style={{ background: '#fff' }}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            >
            <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            >  
              <SubMenu key="user" title={<span><Icon type="management" />后台管理</span>}>
                <MenuItem key="u-1"><Link to={'/management-user-new'}>新增用户</Link></MenuItem>
                <MenuItem key="u-2"><Link to={'/user-lifecycle'}>新增图书</Link></MenuItem>
              </SubMenu>

              <MenuItem key='home'><Link to={'/home'}><Icon type="user" />概述</Link></MenuItem>
              <SubMenu key="user" title={<span><Icon type="user" />用户画像</span>}>
                <MenuItem key="u-1"><Link to={'/user-overall'}>概览</Link></MenuItem>
                <MenuItem key="u-2"><Link to={'/user-lifecycle'}>用户生命周期</Link></MenuItem>
              </SubMenu>

              <SubMenu key="merchant" title={<span><Icon type="user" />卖</span>}>
                <MenuItem key="m-1"><Link to={'/merchant-overall'}>概览</Link></MenuItem>
                <MenuItem key="m-2"><Link to={'/merchant'}>商户</Link></MenuItem>
                <MenuItem key="m-3"><Link to={'/good'}>商品</Link></MenuItem>
                <MenuItem key="m-4"><Link to={'/dilivery'}>物流</Link></MenuItem>
              </SubMenu>

              <SubMenu key="platform" title={<span><Icon type="user" />平台</span>}>
                <MenuItem key="p-1"><Link to={'/platform-overall'}>概览</Link></MenuItem>
                <MenuItem key="p-2"><Link to={'/flow'}>流量</Link></MenuItem>
                <MenuItem key="p-3"><Link to={'/convert'}>转化</Link></MenuItem>
                <MenuItem key="p-4"><Link to={'/pages'}>页面</Link></MenuItem>
              </SubMenu>

              <SubMenu key="sales" title={<span><Icon type="user" />销售</span>}>
                <MenuItem key="s-1"><Link to={'/slaes-overall'}>概览</Link></MenuItem>
              </SubMenu>

              <SubMenu key="channel" title={<span><Icon type="user" />渠道</span>}>
                <MenuItem key="c-1"><Link to={'/channel-overall'}>概览</Link></MenuItem>
              </SubMenu>

              <SubMenu key="operation" title={<span><Icon type="user" />运营</span>}>
                <MenuItem key="o-1"><Link to={'/operation-overall'}>概览</Link></MenuItem>
              </SubMenu>

            </Menu>
          </Sider>

          <Layout style={{ padding: '0 8px 8px', height:'100%' }}>
            <Content style={{ background: '#fff', padding: 12, margin: 0, minHeight: 560 }}>
            {this.props.children}
            </Content>
          </Layout>

        </Layout>
      </Layout>
      );
  }
}

export default App;