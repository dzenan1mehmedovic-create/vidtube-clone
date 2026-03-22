import React from "react";
import { Link } from "react-router-dom";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">

      <Link to="/video/20/1" className="card">
        <img src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop" alt="" />
        <h2>Best YouTube Channel To Learn Web Development</h2>
        <h3>GreatStack</h3>
        <p>199K Views • 2 days ago</p>
      </Link>

      <Link to="/video/20/2" className="card">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" alt="" />
        <h2>Top 10 React Project Ideas For Beginners</h2>
        <h3>Code Master</h3>
        <p>85K Views • 5 days ago</p>
      </Link>

      <Link to="/video/20/3" className="card">
        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop" alt="" />
        <h2>How To Build A Full Website Using React JS</h2>
        <h3>Dev Studio</h3>
        <p>312K Views • 1 week ago</p>
      </Link>

      <Link to="/video/20/4" className="card">
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" alt="" />
        <h2>JavaScript Crash Course 2026</h2>
        <h3>Tech World</h3>
        <p>540K Views • 3 weeks ago</p>
      </Link>

    </div>
  );
};

export default Feed;