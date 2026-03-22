import React from "react";
import "./Sidebar.css";

const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link active">
          <p>Home</p>
        </div>

        <div className="side-link">
          <p>Gaming</p>
        </div>

        <div className="side-link">
          <p>Music</p>
        </div>

        <div className="side-link">
          <p>Sports</p>
        </div>

        <div className="side-link">
          <p>Technology</p>
        </div>

        <div className="side-link">
          <p>Automobiles</p>
        </div>

        <div className="side-link">
          <p>Blogs</p>
        </div>

        <div className="side-link">
          <p>News</p>
        </div>

        <hr />
      </div>

      <div className="subscribed-list">
        <h3>Subscribed</h3>

        <div className="side-link">
          <p>PewDiePie</p>
        </div>

        <div className="side-link">
          <p>MrBeast</p>
        </div>

        <div className="side-link">
          <p>Justin Bieber</p>
        </div>

        <div className="side-link">
          <p>5-Minute Crafts</p>
        </div>

        <div className="side-link">
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;