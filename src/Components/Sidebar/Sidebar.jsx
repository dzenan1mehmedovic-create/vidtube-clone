import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="shortcut-links">
        <p>Home</p>
        <p>Gaming</p>
        <p>Music</p>
        <p>Sports</p>
      </div>

      <hr />

      <div className="subscribed-list">
        <p>PewDiePie</p>
        <p>MrBeast</p>
        <p>Justin Bieber</p>
      </div>
    </div>
  );
};

export default Sidebar;