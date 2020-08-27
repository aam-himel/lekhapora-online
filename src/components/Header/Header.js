import React from 'react';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import './Header.css';
const Header = () => {
    return(
        <div className="header">
            <Navbar bg="dark" variant="dark" className="py-3">
               <Container>
               <Navbar.Brand href="#home" className="brand">
                <img
                    alt=""
                    src="#"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                LEKHAPORA <span className="brand-sub">ONLINE</span>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Categories</Nav.Link>
                    <Nav.Link href="#features">Courses</Nav.Link>
                    <Nav.Link href="#pricing">About US</Nav.Link>
                    <Button variant="danger" className="ml-3 btn-signup">SignUp!</Button>{' '}
                </Nav>

                
               </Container>
            </Navbar>
       </div>
    );
}

export default Header;
