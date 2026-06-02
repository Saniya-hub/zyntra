import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

const Navbarr = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const pathBool = location.pathname.startsWith("/adminportal");

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Zyntra Logo" />

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      <div className={`links ${menuOpen ? "show" : ""}`}>
        {pathBool ? (
          <ul>
            <li><NavLink to="/adminportal/">Home</NavLink></li>
            <li><NavLink to="/adminportal/About">About</NavLink></li>
            <li><NavLink to="/adminportal/products">Products</NavLink></li>
            <li><NavLink to="/adminportal/addusers">Add User</NavLink></li>
            <li><NavLink to="/">Logout</NavLink></li>
          </ul>
        ) : (
          <ul>
            <li><NavLink to="/userportal/">Home</NavLink></li>
            <li><NavLink to="/userportal/About">About</NavLink></li>
            <li><NavLink to="/userportal/products">Products</NavLink></li>
            <li><NavLink to="/userportal/cartitems">Cart Items</NavLink></li>
            <li><NavLink to="/">Logout</NavLink></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbarr;