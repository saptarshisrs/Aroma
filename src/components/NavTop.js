/* eslint-disable */
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

export default function NavTop() {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="/home" className="ml-auto">AROMA</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Menu">Menu</Nav.Link>
      <Nav.Link href="/Gallery">Gallery</Nav.Link>
      <Nav.Link href="/About">About Us</Nav.Link>
      <Nav.Link href="/Book">Book now</Nav.Link>
    </Nav>
  </Container>
</Navbar> */}

<Navbar bg="dark" variant="dark">
  <Container>
    <Link to="/home" className="navbar-brand ml-auto">AROMA</Link>
    <Nav className="mr-auto">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/Menu" className="nav-link">Menu</Link>
      <Link to="/Gallery" className="nav-link">Gallery</Link>
      <Link to="/About" className="nav-link">About Us</Link>
      <Link to="/Book" className="nav-link">Book now</Link>
    </Nav>
  </Container>
</Navbar>




    </>
  )
}
