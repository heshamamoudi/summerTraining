import React from "react";
import { Layout, Navigation, Header, Drawer, Content } from "react-mdl";
import "./App.css";
import Main from "./compnents/Main";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="headerColor"
          title={
            <Link style={{ color: "white" }} to="/">
              Hesham amoudi
            </Link>
          }
          scroll
        >
          <Navigation className="headerNav">
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/aboutMe">About me</Link>
            <Link to="/contact">contact</Link>
          </Navigation>
        </Header>

        <Drawer title="Extra">
          <Navigation>
            <a href="https://twitter.com/fostogpriv" target="_blank">
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/hesham-amoudi-5024601ab/"
              target="_blank"
            >
              LinkedIn
            </a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
