// Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-item" activeClassName="active">
        HOME
      </NavLink>
      <NavLink to="/about" className="nav-item" activeClassName="active">
        ABOUT ME
      </NavLink>
      <a
        href="https://drive.google.com/file/d/11HXEs7hn0MN3q3d1gTzbEJhVW8nNNV2s/view?usp=share_link"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item"
      >
        RESUME
      </a>
      <a
        href="https://www.linkedin.com/in/reuben-thorn/"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item"
      >
        LINKEDIN
      </a>
      <a href="mailto:reuben.j.thorn@icloud.com" className="nav-item">
        EMAIL
      </a>
      <a
        href="https://github.com/Th0rn4"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item"
      >
        GITHUB
      </a>
    </nav>
  );
};

export default Navbar;
