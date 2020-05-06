import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import homePic from "./images/home.jpg"
function App() {
  return (
    <div className="demo-big-content">
      <Layout style={{
        background: `url(${homePic}) center/cover`
      }} >
        <Header transparent title={<Link style={{ textDecoration: "none", color: "white" }}
          to="/">MyPortfolio</Link>} scroll>
          <Navigation>
            <Link style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} to="/aboutme">About Me</Link>
            <Link style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} to="/resume">Resume</Link>
            <Link style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} to="projects">Projects</Link>
            <Link style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} to="contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer style={{color:"white"}} title={<Link style={{ textDecoration: "none", color: "black" }}
          to="/">MyPortfolio</Link>}>
          <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/resume">Resume</Link>
            <Link to="projects">Projects</Link>
            <Link to="contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}
export default App;
