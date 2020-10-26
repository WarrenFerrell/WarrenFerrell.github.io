import React from "react";
import Routes from "./Routes";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <Navbar bg="light" expand="lg">
        <Link to="/" className="navbar-brand">wtfj.dev</Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" pullRight="true">
            <NavLink to="/home" className="nav-link">Home</NavLink>
            <NavLink to="/faq" className="nav-link">About</NavLink>
            <NavLink to="/blog" className="nav-link">Blog (soon)</NavLink>
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
            <NavLink to="/faq" className="nav-link">FAQ</NavLink>
            <Nav.Link href="http://www.linkedin.com/in/warrenferrell">Linkedin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
