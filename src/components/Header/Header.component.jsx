import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// import logo from "../../assets/images/logo_without-bg_500.png";
// import logoAlt from "../../assets/images/logo_with-bg_500.png";

import "./Header.style.css";

const Header = () => {
  let history = useHistory();

  const navigateTo = (str) => {
    // window.location.replace(`/${str}`);
    history.push(`/${str}`);
  };

  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="md"
      variant="dark"
      className="animate-navbar nav-theme justify-content-between navbar-custom"
    >
      <Navbar.Brand href="/" className="navbar-logo">
        {/* NEURA<span>LAXY</span> */}
        <span>Neuralaxy</span>
        {/* <img src={logo} alt="" /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="navbar-collapse-custom"
      >
        <Nav className="ml-auto">
          <Nav.Link onClick={() => navigateTo("tutorials")} className="nav-link-custom">Tutorials</Nav.Link>
          <Nav.Link onClick={() => navigateTo("demo")}>Demo</Nav.Link>
          {/* <Nav.Link onClick={() => navigateTo("team")}>Team</Nav.Link> */}
          {/* <Nav.Link onClick={() => navigateTo("testimonials")}>
            Testimonials
          </Nav.Link> */}
          <Nav.Link onClick={() => navigateTo("contact")}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
