import React from "react";
import "./Navbar.css";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="menu-icon" onClick={() => setSidebar((prev) => !prev)}>
          ☰
        </span>
        <h1 className="logo">VidTube</h1>
      </div>

      <div className="nav-middle">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <span className="search-icon">⌕</span>
        </div>
      </div>

      <div className="nav-right">
        <span>⨁</span>
        <span>🔔</span>
        <div className="user-icon">U</div>
      </div>
    </nav>
  );
};

export default Navbar;