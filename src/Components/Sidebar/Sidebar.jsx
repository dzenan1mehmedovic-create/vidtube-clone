import React from "react";
import "./Sidebar.css";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <p>Home</p>
        </div>

        <div
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <p>Gaming</p>
        </div>

        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <p>Music</p>
        </div>

        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <p>Sports</p>
        </div>

        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <p>Technology</p>
        </div>

        <div
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <p>Automobiles</p>
        </div>

        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <p>Blogs</p>
        </div>

        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
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