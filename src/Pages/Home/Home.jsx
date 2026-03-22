import React from "react";
import "./Home.css";
import Feed from "../../Components/Feed/Feed";
import Shorts from "../../Components/Shorts/Shorts";

const Home = ({ sidebar, category, searchQuery }) => {
  return (
    <div className={`container ${sidebar ? "" : "large-container"}`}>
      <Shorts />
      <Feed category={category} searchQuery={searchQuery} />
    </div>
  );
};

export default Home;