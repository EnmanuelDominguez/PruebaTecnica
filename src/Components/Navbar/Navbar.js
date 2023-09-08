import React from "react";
import logo from "../../logo.svg"
import './Navbar.css'

const Navbar = ({brand}) => {
    return (  
        <nav className="navbar bg-dark" data-bs-theme="dark">
            <div className="container-header">
                <img alt="" src={logo} height="50vh" width="50vw"/>
                <a href="#!" className="navbar-brand">{brand}</a>
            </div>
        </nav>
    );
}
 
export default Navbar;