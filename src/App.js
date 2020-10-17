import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
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
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  );
}

export default App;
