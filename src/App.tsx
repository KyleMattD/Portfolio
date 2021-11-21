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
import Graduation from './assets/images/High_DM04127-011.jpg';
import DopeBoat from './assets/images/20181231-DSC_0029.jpg';
import { List, Divider } from 'antd';


const data = [
  'I am 22',
  'I am currently completing my honours degree at Tuks in Informatics',
  'My goal in life is to be happy and make others happy too',
  'My mantra is to never run away from a challenge',
  'I am a twin, and my star sign is Gemini',
  'In my spare time I am an avid gymer, adrenaline seeker and explorer',
  'I am a photographer, shooting on film and digital cameras'
];

function AboutMe() {
  return(
    <div className='center'>
      <div className='head'>
        <label id="heading">About Me</label>
        <img src={Graduation} alt="me" id="photo"/>
      </div>
      <div className='info'>
        <label id="h2">My name is Kyle Drotsky</label>
        <Divider orientation="center">Facts</Divider>
        <List
          id="list"
          size="small"
          bordered
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <img src={DopeBoat} id='DopeBoat' alt='DopeBoat'/>
        </div>
      </div>
    </div>
  )
}
function Motivations() {
  return (
    <div>
      <div id="links">Links to all my Socials</div>
      <link href='https://drive.google.com/file/d/1kGj0JvXnX4cnGDySVDsqsUqq28olUVdv/view'>Resume</link>
      <link>LinkedIn</link>
      <link>Website</link>
      <link>Portfolio</link>
    </div>
  )
}

function Files(){
  return (
    <div>
      <div></div>
    </div>
  )
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