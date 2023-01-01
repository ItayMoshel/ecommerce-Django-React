import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'

function Header() {
  return (
      <header>
          <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="/">ProShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
  )
}

export default Header