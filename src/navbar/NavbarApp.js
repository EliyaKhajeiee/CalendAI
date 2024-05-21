import React from 'react';
import './NavbarApp.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const NavbarApp = () => {
  return (
    <nav className="navbar">
        <ul className="navbar-list">
            <li className="navbar-item">
                <Link to="/src/account">Account</Link>
            </li>
            <li className="navbar-item">
                <img src={logo} alt="Logo" className="navbar-logo"/>
            </li>
            <li className="navbar-item">
                <Link to="/src/settings">Settings</Link> 
            </li>
        </ul>
    </nav>
  );
};

export default NavbarApp;
