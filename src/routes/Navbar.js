import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";

const NavBar = () => {
    return (
        <div className="Navbar">
            <Navbar expand="md">
                <NavbarBrand to="/">
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
                </Nav>
               
            </Navbar>

        </div>
    )
}

export default NavBar;