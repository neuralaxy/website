import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import "./Header.style.css";

const Header = () => {
    let history = useHistory();

    const navigateTo = (str) => {
        // window.location.replace(`/${str}`);
        history.push(`/${str}`);
    }

    return (
        <Navbar collapseOnSelect fixed="top" expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between navbar-custom">
            <Navbar.Brand href="/" className="navbar-logo">
                NEURA<span>LAXY</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="navbar-collapse-custom">
                <Nav className="ml-auto">
                    <Nav.Link href="#about" className="nav-link">About</Nav.Link>
                    <Nav.Link onClick={() => navigateTo("tutorials")}>Tutorials</Nav.Link>
                    <Nav.Link href="#updates">Updates</Nav.Link>
                    <Nav.Link onClick={() => navigateTo("contact-us")}>Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;