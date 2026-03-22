import React from "react";
import "./Home.css";
import Feed from "../../Components/Feed/Feed";

const Home = ({ sidebar }) => {
  return (
    <div className={`container ${sidebar ? "" : "large-container"}`}>
      <Feed />
    </div>
  );
};

export default Home;