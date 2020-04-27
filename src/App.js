import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content">
      <Layout style={{
        background: 'url(https://lh3.googleusercontent.com/MVvjVC8CYjoUhLoxIh8swp_egJ5uxHXr0W8DjpBmuCAG36rWJ_8uSN_QhkncqfnfdRxC7lS2jBfCoGHZ3D5dDSgZQcY9FpjQ7Kply4U694WsbrQ5NGnumC4n-car4s080gSeEta8MYFgiM1D3_eQCf2pA_l0XeH5ejdf3tVmUJroq_nCTizAWcA04u1nHEUnPkpbGmP4JGbtHKzl2W-x7vu5Pbvxg6NPaCLbUz8dK4r7-R2J9TPB5ia1mx3vltNuIyrJSzucKdrS9TPt4MObZTGZYAdzkpGXyFoUcl2aMnxblgYtTmnM-BhBCSarNh-AutDTcQBX_eKkNSAyc-aCXSCaujkW2F-N0pFZ9xU3PGnSmGT8V6DNoz8Wc0M5uteNqbc_diVpx4_qxVTC3Oy3mvClbUHNSI7L-eWwjnj5pmvHKmToDGp1atgrKJSwXiHTuojOli2oOfIcxZCexVJ0yoYtce1xP9ZoGcCAti2XMj0RNgewrKgJGr_q6d3xNvZjgFTzbK5x1YrweW8n81QcBEMehC3C_jz3lzjEBxjhDFT9Oy7NsXTYnjOPgfv04CwLNX-SMJLSOnxnvn3UAc-XhHvwCm7qozpHyqfuJuUjF8f5T06FnAWkDg_oYBPm3xmlIFQPYfxeG-QKnna8FhxSVU_wFP_YNdWTXstrvMzR54av2KWeTdfLrJVmM8YBZXQ=w700-h467-no)center/cover'
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
