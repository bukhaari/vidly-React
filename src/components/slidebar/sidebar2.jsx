import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './sidebar.css'
const Navbar = () => {
    return (
        <div className="sidebar" >
       <Link  className="nav-item nav-link " className="active"to="/movies">Movies</Link>
       <Link  className="nav-item nav-link " to="/customers">Customers</Link>
       <Link to="#contact">Contact</Link>
       <Link to="#about">About</Link>
      </div> 
    );
}

export default Navbar;