import React, {Component} from 'react';
import './App.css';
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
import NC from './assets/images/_MG_7001 copy.jpeg';
import LH from './assets/images/DSC08855-3 copy.jpg';
import { List, Divider } from 'antd';

//data for the list in aboutme
const data = [
  'I am 22',
  'I am currently completing my honours degree at Tuks in Informatics',
  'My goal in life is to be happy and make others happy too',
  'My mantra is to never run away from a challenge',
  'I am a twin, and my star sign is Gemini',
  'In my spare time I am an avid gymer, adrenaline seeker and explorer',
  'I am a photographer, shooting on film and digital cameras'
];

// data for the list in my motivations
const Data = [
  'Great values, which I align with and agree with wholeheartedly', 
  'The company works in multiple industries, giving employees exposure to many opportunities',
  'Big clients which is great to see',
  'I did some research and SovTech is one of the best development companies in the country',
  'Many streams of development and design',
  'International relocation opportunities',
  'Incredibly friendly people'
];

//about me 
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
// motivation as to why i want to work at sovtech
function Motivations() {
  return (
    <div className='center'>
      <label id="motivation">Why Do I want to Work at SovTech?</label>
      <div id="para">
        <p id='p1'>SovTech has been on my radar for quite some time now.
        While I have been busy with my honours I have been working part time as a Software Engineer for a startup and it
        has been an experience. I was thrown into the deepend and I had to sink or swim, and so I swam as best as I could.  
        </p>
        <p>
          I want to work for a bigger company, where I know I will learn from the best in industry 
          and gain knowledge that I would not otherwise have access to. I also want a mentor that can help me become more confident in my abilities as a programmer. 
        </p>
        <Divider orientation="center">Reasons why I choose SovTech</Divider>
        <List
          id="list"
          size="small"
          bordered
          dataSource={Data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    </div>
  )
}
// shows all my socials 
function Files(){
  return (
    <div className='center'>
      <div id="links">
        <label className='link'>Links to all my Socials</label>
        <label id='social'>Feel free to checkout my socials if you need any more information</label>
        <a href='https://drive.google.com/file/d/1kGj0JvXnX4cnGDySVDsqsUqq28olUVdv/view'>Resume</a>
        <a href='https://www.linkedin.com/in/kyle-drotsky-18ab62197/'>LinkedIn</a>
        <a href='https://kyledrotsky555.wixsite.com/weasleyswonders'>Photography Website</a>
        <a href='https://kyledrotsky555.wixsite.com/portfolio'>Design Portfolio</a>
      </div>
      <div style={{display:'flex', paddingTop:50}}>
        <img src={NC} id='NC' alt='NC'/>
        <img src={LH} id='LH' alt='LH'/>
      </div>
    </div>
  )
}

// component to render all the other functions
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