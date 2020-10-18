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
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About (soon)</Nav.Link>
      <Nav.Link href="#link">Blog (soon)</Nav.Link>
      <NavDropdown title="Projects" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Computational Donations - coming soon</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Lights Out - coming soon</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link">FAQ</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Routes />
</div>
  );
}

export default App;
