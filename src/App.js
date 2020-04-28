import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content">
      <Layout style={{
        background: 'url(https://images.unsplash.com/photo-1487284122274-e864e9dec2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80)center/cover'
        , opacity: '0.9'
      }}>
        <Header transparent title={<Link style={{ textDecoration: "none", color: "white" }}
          to="/">MyPortfolio</Link>} scroll>
          <Navigation>
            <Link style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} to="/aboutme">About Me</Link>
            <Link style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} to="/resume">Resume</Link>
            <Link style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} to="projects">Projects</Link>
            <Link style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} to="contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link style={{ textDecoration: "none", color: "black" }}
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
