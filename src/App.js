import React from 'react';
import Routes from "./Routes";
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container">
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Warren T. Ferrell Jewell</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/About">About (soon)</Nav.Link>
      <Nav.Link href="/Blog">Blog (soon)</Nav.Link>
      <NavDropdown title="Projects" id="basic-nav-dropdown">
        <NavDropdown.Item href="/projects/bitcoinmining">Computational Donations - coming soon</NavDropdown.Item>
        <NavDropdown.Item href="/projects/lightsout">Lights Out - coming soon</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/faq">FAQ</Nav.Link>
      <Nav pullRight>
        <Nav.Link href="http://www.linkedin.com/in/warrenferrell">Linkedin</Nav.Link>
      </Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Routes />
</div>
  );
}

export default App;
