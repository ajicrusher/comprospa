import React, {useEffect, useState} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/logo.png';
import '../styles/NavbarComp.css';

function NavbarComp() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" sticky="top" className={`navbar-custom  ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand href="#home"><img
            src={logo}
            alt="PT Sarana Packaging Agrapana"
            height="40"
            className="me-2"
          />PT. Sarana Packaging Agrapana</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto justify-content-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComp;