import { useState, useEffect } from 'react';
import { Nav, Navbar, Container } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={''} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <span className="nav-bar-toggler-icon"></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
            href="#home"
            className={activeLink === 'home' ? 'active-nav-bar-link' : 'nav-bar-link'}
            onClick={() => onUpdateActiveLink('home')}>Início</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active-nav-bar-link' : 'nav-bar-link'}  onClick={() => onUpdateActiveLink('about')}>Sobre</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-nav-bar-link' : 'nav-bar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-nav-bar-link' : 'nav-bar-link'} onClick={() => onUpdateActiveLink('projects')}>Projetos</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active-nav-bar-link' : 'nav-bar-link'} onClick={() => onUpdateActiveLink('contact')}>Contato</Nav.Link>
          </Nav>
          <span className="nav-bar-text">
            <div className="social-icon">
              <a href="#"><img src={''} alt="linkedin" /></a>
              <a href="#"><img src={''} alt="github" /></a>
              <a href="#"><img src={''} alt="instagram" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}; 

// recombinando atos
