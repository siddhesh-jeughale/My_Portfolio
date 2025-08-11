import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Header.css'
import { useDispatch } from 'react-redux';
import { changeGradient } from '../store/storeSlice';
import { Link } from 'react-router';

function Header() {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary p-3" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className='fs-4 ps-lg-4'>SIDDHESH</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className=' px-lg-5'>
            <Nav className="ms-auto ">
              <Nav.Link as={Link} to="/" className='ps-3 nav-links'>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className='ps-3 nav-links'>About</Nav.Link>
              <Nav.Link as={Link} to="/skills" className='ps-3 nav-links'>Skills</Nav.Link>
              <Nav.Link as={Link} to="/contact" className='ps-3 nav-links'>Contact</Nav.Link>
            </Nav>
            <div className="theme-change ms-3 shadow bg-dark" onClick={()=>dispatch(changeGradient())}>
              <i className="fa-regular fa-sun text-white" style={{ cursor: 'pointer', fontSize: "20px" }} ></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
