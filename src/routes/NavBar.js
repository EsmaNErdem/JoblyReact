import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";
import UserContext from "../auth/UserContext";

/**
 * Navbar Component
 * Displays Navbar on every page
 * when user logged in, shows links to protected routes
 * shows links ro login and signup for when there is no loggedin user
 * Rendered by App
 * 
 */

const NavBar = ({ logOut }) => {
    const { currentUser } = useContext(UserContext);

    const loggedInNavbar = () => (
        <>  
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
                <Link to="/" onClick={logOut}>Log Out</Link>
            </NavItem>
        </>
    )

    const loggedOutNavbar = () => (
        <>
            <NavItem>
                <NavLink to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/signup">Sing Up</NavLink>
            </NavItem>
        </>
    )
    
    return (
        <div className="Navbar">
            <Navbar expand="md">
                <NavbarBrand href="/">Jobly</NavbarBrand>
                <Nav className="ml-auto" navbar>
                  {currentUser ? loggedInNavbar() : loggedOutNavbar()}
                </Nav>              
            </Navbar>

        </div>
    )
}

export default NavBar;