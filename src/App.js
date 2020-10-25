import React from "react";
import Routes from "./Routes";
import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <Navbar bg="light" expand="lg">
          <Link to="/" className="navbar-brand">
            wtfj.dev
          </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" pullRight="true">
            <Link to="/faq" className="nav-link">
              About
            </Link>
            <Link to="/blog" className="nav-link">
              Blog (soon)
            </Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item>Musical Scroll - coming soon</NavDropdown.Item>
              <NavDropdown.Item>
                Computational Donations - coming soon
              </NavDropdown.Item>
              <NavDropdown.Item>Lights Out - coming soon</NavDropdown.Item>
            </NavDropdown>
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
            <Nav.Link href="http://www.linkedin.com/in/warrenferrell">
              Linkedin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
