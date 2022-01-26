import React from 'react';
import "./Navbar.css"
import Logo from "../images/Logo.png"
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="navbar_MainContianer">
            <img src={Logo} alt="Logo" className="navbar_Logo"/>
            <div id="navbar_LoginContainer">
                <Link exact to="/login" id="navbar_LoginSignupText">Login</Link>
                <Link exact to="/SignUp" id="navbar_LoginSignupText" >Sign Up</Link>
            </div>
        </div>
    );
};

export default Navbar;
