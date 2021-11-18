import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./Header.style.css";

const Header = () => {
    return (
        <Navbar collapseOnSelect fixed="top" expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between navbar-custom">
            <Navbar.Brand href="/" className="navbar-logo">
                NEURA<span>LAXY</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="navbar-collapse-custom">
                <Nav className="ml-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#tutorials">Tutorials</Nav.Link>
                    <Nav.Link href="#updates">Updates</Nav.Link>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;