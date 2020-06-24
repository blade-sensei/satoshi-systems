import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <div className="navbar">
    <h3></h3>
    <Link to="/login">Go to Login</Link>
  </div>
);

export default NavBar;