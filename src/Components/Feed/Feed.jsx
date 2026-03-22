import React from "react";
import { Link } from "react-router-dom";
import "./Feed.css";

const Feed = ({ category }) => {
  const videos = [
    {
      id: "ysz5S6PUM-U",
      category: 10,
      image: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
      title: "Learn React in 12 Minutes",
      channel: "Jake Wright",
      views: "1.2M Views",
      time: "2 years ago",
    },
    {
      id: "w7ejDZ8SWv8",
      category: 28,
      image: "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
      title: "React JS Full Course for Beginners",
      channel: "Programming with Mosh",
      views: "5.4M Views",
      time: "3 years ago",
    },
    {
      id: "SqcY0GlETPk",
      category: 17,
      image: "https://img.youtube.com/vi/SqcY0GlETPk/hqdefault.jpg",
      title: "Learn JavaScript in 1 Hour",
      channel: "Programming with Mosh",
      views: "9.1M Views",
      time: "2 years ago",
    },
    {
      id: "PkZNo7MFNFg",
      category: 20,
      image: "https://img.youtube.com/vi/PkZNo7MFNFg/hqdefault.jpg",
      title: "JavaScript Tutorial for Beginners",
      channel: "freeCodeCamp.org",
      views: "23M Views",
      time: "5 years ago",
    },
    {
      id: "rfscVS0vtbw",
      category: 28,
      image: "https://img.youtube.com/vi/rfscVS0vtbw/hqdefault.jpg",
      title: "Python Full Course for Beginners",
      channel: "freeCodeCamp.org",
      views: "61M Views",
      time: "4 years ago",
    },
    {
      id: "kUMe1FH4CHE",
      category: 2,
      image: "https://img.youtube.com/vi/kUMe1FH4CHE/hqdefault.jpg",
      title: "Learn HTML in 12 Minutes",
      channel: "Jake Wright",
      views: "2.8M Views",
      time: "6 years ago",
    },
    {
      id: "OXGznpKZ_sA",
      category: 25,
      image: "https://img.youtube.com/vi/OXGznpKZ_sA/hqdefault.jpg",
      title: "CSS Tutorial for Beginners",
      channel: "Programming with Mosh",
      views: "4.7M Views",
      time: "4 years ago",
    },
    {
      id: "mU6anWqZJcc",
      category: 22,
      image: "https://img.youtube.com/vi/mU6anWqZJcc/hqdefault.jpg",
      title: "Build and Deploy 3 Modern React Apps",
      channel: "JavaScript Mastery",
      views: "1.1M Views",
      time: "1 year ago",
    },
  ];

  const filteredVideos =
    category === 0 ? videos : videos.filter((video) => video.category === category);

  return (
    <div className="feed">
      {filteredVideos.map((video) => (
        <Link
          to={`/video/${video.category}/${video.id}`}
          className="card"
          key={video.id}
        >
          <img src={video.image} alt={video.title} />
          <h2>{video.title}</h2>
          <h3>{video.channel}</h3>
          <p>
            {video.views} • {video.time}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;