import React from "react";
import logo from "../../logo.svg"
import './Navbar.css'

const Navbar = ({brand}) => {
    return (  
        <nav className="navbar bg-dark" data-bs-theme="dark">
            <div className="container-header">
                <img alt="" src={logo} height="50vh" width="50vw"/>
                <a href="/registers" className="navbar-brand">{brand}</a>
                <button className="btn btn-danger"><a href="/">Cerrar sesión</a></button>
            </div>
        </nav>
    );
}
 
export default Navbar;