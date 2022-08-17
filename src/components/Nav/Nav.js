import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

const NavbarEl = () => {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Estatery</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#rent">Rent</Nav.Link>
                <Nav.Link href="#buy">Buy</Nav.Link>
                <Nav.Link href="#property">Manage Property</Nav.Link>
                <Nav.Link href="#resources">Resources</Nav.Link>
            </Nav>
            <Nav>
                <Button className='cta-btn login-btn'>Login</Button>
                <Button className='cta-btn'>Sign up</Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
     </Navbar>
  )
}

export default NavbarEl