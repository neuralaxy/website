import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <Nav.Link
            onClick={() => navigateTo("tutorials")}
            className="nav-link-custom"
          >
            Tutorials
          </Nav.Link>
          <Nav.Link onClick={() => navigateTo("demo")}>Demo</Nav.Link>
          {/* <Nav.Link onClick={() => navigateTo("team")}>Team</Nav.Link> */}
          {/* <Nav.Link onClick={() => navigateTo("testimonials")}>
            Testimonials
          </Nav.Link> */}
          <Nav.Link
            href="https://www.mouser.in/ProductDetail/Neuralaxy/CS-NEUROSTIM-01?qs=QNEnbhJQKvY9Tz7O%252BXdcKw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy
          </Nav.Link>
          <Nav.Link onClick={() => navigateTo("contact")}>Contact</Nav.Link>
          <Nav.Link
            href="https://github.com/neuralaxy/NeuroStimDuino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
