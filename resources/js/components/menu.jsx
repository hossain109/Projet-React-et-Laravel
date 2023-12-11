import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logo from '../../images/sohrab.png';
import React,{useState} from 'react';
// import Logout from '../pages/Logout';



function Menu() {

    return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
            <Container fluid={true}>
                <Navbar.Brand href="/"><Image src={logo} alt='logo' className='mylogo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{fontSize:22}}>
                        <Nav.Item className='nav-font'><NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/'>Home</NavLink></Nav.Item>
                        <Nav.Item className='nav-font'><NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/registration'>Registraion</NavLink></Nav.Item>
                        <Nav.Item className='nav-font'><NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/courseplan'>Course Plan</NavLink></Nav.Item>
                        <Nav.Item className='nav-font'><NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/freeclass'>Free Class</NavLink></Nav.Item>
                    </Nav>
                    {/* <Logout /> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;