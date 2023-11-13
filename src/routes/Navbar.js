import React from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";

const NavBar = ({ logOut }) => {
    return (
        <div className="Navbar">
            <Navbar expand="md">
                <NavbarBrand href="/">
                    Jobly
                </NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/companies">Companies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/jobs">Jobs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/profile">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/signup">Sing Up</NavLink>
                    </NavItem>
                    <NavItem>
                        <Link to="/" onClick={logOut}>Log Out</Link>
                    </NavItem>
                </Nav>
               
            </Navbar>

        </div>
    )
}

export default NavBar;