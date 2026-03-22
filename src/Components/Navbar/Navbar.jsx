import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <p className="logo">VidTube</p>
      </div>

      <div className="nav-middle">
        <input type="text" placeholder="Search" />
      </div>

      <div className="nav-right">
        <p>User</p>
      </div>
    </nav>
  );
};

export default Navbar;