import './Navbar.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return(
    React.createElement("header", { className: "navbar" }, 
    React.createElement("div", { className: "navbar__title"},<Link to="/" style={{ textDecoration: 'none', color: 'white' }}><img className="logo" src="webshio.png" alt=""/> 
    </Link>),
    React.createElement("div", { className: "navbar__item"},<Link to="add-item" style={{ textDecoration: 'none', color: 'white' }}>Item
    </Link>), 
    React.createElement("div", { className: "navbar__item"},<Link to="add-category" style={{ textDecoration: 'none', color: 'white' }}>Category</Link>), 
    React.createElement("div", { className: "navbar__item"},<Link to="cart" style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>)
  ))
}


export default Navbar