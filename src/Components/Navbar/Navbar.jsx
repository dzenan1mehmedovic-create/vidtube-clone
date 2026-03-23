import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ setSidebar, searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();

    if (!trimmedQuery) {
      navigate("/");
      return;
    }

    navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === "/search") {
      setSearchQuery("");
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="menu-icon" onClick={() => setSidebar((prev) => !prev)}>
          ☰
        </span>

        <Link to="/" className="logo-link" onClick={handleLogoClick}>
          <h1 className="logo">VidTube</h1>
        </Link>
      </div>

      <div className="nav-middle">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <span className="search-icon" onClick={handleSearch}>
            ⌕
          </span>
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