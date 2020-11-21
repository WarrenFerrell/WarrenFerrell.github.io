import React from 'react';
import Routes from './Routes';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App container">
      <Navbar bg="light" expand="lg">
        <NavLink to="/" className="navbar-brand">wtfj.dev</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" pullRight="true">
            <NavLink to="/faq" className="nav-link">About/FAQ</NavLink>
            <NavLink to="/blog" className="nav-link">Blog (soon)</NavLink>
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
            <Navbar.Brand href="http://www.github.com/warrenferrell" className="navbar-brand"><img 
              src="/GitHub-Mark-32px.png" 
              className="d-inline-block align-center"
              alt="Github logo"/></Navbar.Brand>
            <Navbar.Brand href="http://www.linkedin.com/in/warrenferrell" className="navbar-brand"><img 
              src="/LI-In-Bug-32.png" 
              className="d-inline-block align-center"
              alt="LinkedIn logo"/></Navbar.Brand>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
