import React from "react";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#" className="logo">alejoKpo</a>
            <ul className="menu">
                <li><a href="#" className="menu-nav">Home</a></li>
                <li><a href="#" className="menu-nav">About</a></li>
                <li><a href="#" className="menu-nav">Services</a></li>
                <li><a href="#" className="menu-nav">Contact</a></li>
            </ul>



        </nav>
    )
}

export default Navbar;