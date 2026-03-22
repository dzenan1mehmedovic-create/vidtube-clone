import React from "react";
import { Link } from "react-router-dom";
import "./Recommended.css";

const Recommended = () => {
  const recommendedVideos = [
    {
      id: "ysz5S6PUM-U",
      image: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
      title: "Learn React in 12 Minutes",
      channel: "Jake Wright",
      views: "1.2M Views",
    },
    {
      id: "w7ejDZ8SWv8",
      image: "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
      title: "React JS Full Course for Beginners",
      channel: "Programming with Mosh",
      views: "5.4M Views",
    },
    {
      id: "SqcY0GlETPk",
      image: "https://img.youtube.com/vi/SqcY0GlETPk/hqdefault.jpg",
      title: "Learn JavaScript in 1 Hour",
      channel: "Programming with Mosh",
      views: "9.1M Views",
    },
    {
      id: "PkZNo7MFNFg",
      image: "https://img.youtube.com/vi/PkZNo7MFNFg/hqdefault.jpg",
      title: "JavaScript Tutorial for Beginners",
      channel: "freeCodeCamp.org",
      views: "23M Views",
    },
    {
      id: "rfscVS0vtbw",
      image: "https://img.youtube.com/vi/rfscVS0vtbw/hqdefault.jpg",
      title: "Python Full Course for Beginners",
      channel: "freeCodeCamp.org",
      views: "61M Views",
    },
    {
      id: "OXGznpKZ_sA",
      image: "https://img.youtube.com/vi/OXGznpKZ_sA/hqdefault.jpg",
      title: "CSS Tutorial for Beginners",
      channel: "Programming with Mosh",
      views: "4.7M Views",
    },
  ];

  return (
    <div className="recommended">
      {recommendedVideos.map((video) => (
        <Link to={`/video/20/${video.id}`} className="side-video-list" key={video.id}>
          <img src={video.image} alt={video.title} />

          <div className="vid-info">
            <h4>{video.title}</h4>
            <p>{video.channel}</p>
            <p>{video.views}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;