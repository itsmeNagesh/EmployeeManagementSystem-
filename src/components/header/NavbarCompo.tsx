import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./NavBarcomp.css";
import { useAuth0 } from "@auth0/auth0-react";

const NavbarCompo: React.FC = () => {
    const { user, logout, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    const[User,setuser]=useState(user);
    console.log(User)

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div className="hed">
            <Navbar collapseOnSelect fixed="top" expand="lg" className="nav22">
                <Container data-aos="flip-right">
                    <Navbar.Brand href="#home" className="tittle text-light">
                        <span>E</span>mployee &nbsp;
                        <span>M</span>anagent<br />
                        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                        <span>S</span>ystem
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-light" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className="nav-link tittle text-light" >Home</NavLink>
                            <NavLink to="/EmpTable" className="nav-link tittle text-light" >Employee Table</NavLink>
                            <NavLink to="https://nageshmourya.netlify.app/" className="nav-link tittle text-light" >Contact</NavLink>
                        </Nav>
                        <Nav className="ms-5">
                            {isAuthenticated ? (
                                <>
                                <Nav className="">
                                {User &&    <img src={User.picture}  className="pic1" />}
                                    {/* <span>{user.name}</span> */ }
                                    <button className="ms-3 border-0 " style={{height:"30px",width:"90px"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                        Log Out
                                    </button>
                                    </Nav>
                                </>
                            ) : (
                              <Nav>  <button onClick={() => loginWithRedirect()} className="btn btn-success">Log In</button></Nav>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarCompo;
