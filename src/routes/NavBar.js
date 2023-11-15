import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavbarBrand } from "reactstrap";
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
            <NavLink className="nav-link" to="/companies">Companies</NavLink>
            <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
            <Link className="nav-link" to="/" onClick={logOut}>Log Out {currentUser.username}</Link>
        </>
    );

    const loggedOutNavbar = () => (
        <>
            <NavLink className="nav-link" to="/login">Login</NavLink>
            <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        </>
    );

    return (
        <div className="NavBar">
            <Navbar expand="md">
                <NavbarBrand href="/">Jobly</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    {currentUser ? loggedInNavbar() : loggedOutNavbar()}
                </Nav>              
            </Navbar>
        </div>
    );
}

export default NavBar;
