import React, {Component} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";
import './index.css';
import { Layout, Menu } from 'antd';
import {
  InfoCircleOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons';


function AboutMe() {
  return(
    <div>
      <h1>Hello</h1>
    </div>
  )
}
function Motivations() {
  return <div>Motivations</div>;
}

function Files(){
  return <div>Files</div>;
}

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  state = {
    collapsed: false,
};

onCollapse = (collapsed: any) => {
    this.setState({ collapsed });
}
toggle = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
}

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<UserOutlined />}>
                About Me
              <Link to="/"/>
              </Menu.Item>
              <Menu.Item key="2" icon={<InfoCircleOutlined />}>
                Motivations
              <Link to="/motivations" />
              </Menu.Item>
              <Menu.Item key="3" icon={<FileOutlined />}>
                Files
              <Link to="/files" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header style={{ textAlign: 'center', color:'white', fontSize:32 }}>Portfolio</Header>
            <Content style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}>
              <Routes>
                <Route path="/" element={<AboutMe/>} />
                <Route path="/motivations" element={<Motivations/>} />
                <Route path="/files" element={<Files/>} />
              </Routes>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Kyle Drotsky 2021</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;