import React from 'react'
import {
  Nav,
  Container,
  Navbar,
} from 'react-bootstrap';


import './header.css'
function Header() {
  return (

    // <Navbar bg="light-success" expand="lg" >
    <Navbar expand="lg sticky-top  navbar-main navbar-transparent navbar-light headroom" style={{ backgroundColor: '#d38ee7' }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <h3 style={{ color: "#fff" }}>
            Navbar scroll

          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
          </Nav>

         
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;