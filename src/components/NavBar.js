import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import logo from "../assets/logo.png";
import styles from '../styles/NavBar.module.css';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to='/'>
                    <Navbar.Brand><img src={logo} alt="logo" height="55"></img></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <NavLink
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/"
                        >Home</NavLink>
                        <NavLink 
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/"
                        >Find a sitter</NavLink>
                        <NavLink 
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/signup"
                            >Sign up</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar