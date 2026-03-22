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
          <span>🏠</span>
          <p>Home</p>
        </div>

        <div
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <span>🎮</span>
          <p>Gaming</p>
        </div>

        <div
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <span>🚗</span>
          <p>Automobiles</p>
        </div>

        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <span>⚽</span>
          <p>Sports</p>
        </div>

        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <span>📺</span>
          <p>Entertainment</p>
        </div>

        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <span>💻</span>
          <p>Technology</p>
        </div>

        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <span>🎵</span>
          <p>Music</p>
        </div>

        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <span>📰</span>
          <p>Blogs</p>
        </div>

        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <span>🗞️</span>
          <p>News</p>
        </div>

        <hr />
      </div>

      <div className="subscribed-list">
        <h3>Subscribed</h3>

        <div className="side-link">
          <img src="https://i.pravatar.cc/28?img=12" alt="" />
          <p>PewDiePie</p>
        </div>

        <div className="side-link">
          <img src="https://i.pravatar.cc/28?img=15" alt="" />
          <p>MrBeast</p>
        </div>

        <div className="side-link">
          <img src="https://i.pravatar.cc/28?img=18" alt="" />
          <p>Justin Bieber</p>
        </div>

        <div className="side-link">
          <img src="https://i.pravatar.cc/28?img=21" alt="" />
          <p>5-Minute Crafts</p>
        </div>

        <div className="side-link">
          <img src="https://i.pravatar.cc/28?img=24" alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;