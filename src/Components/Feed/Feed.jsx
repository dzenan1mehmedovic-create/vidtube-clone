import React from "react";
import { Link } from "react-router-dom";
import { videoData } from "../../data";
import "./Feed.css";

const Feed = ({ category }) => {
  const filteredVideos =
    category === 0
      ? videoData
      : videoData.filter((video) => video.category === category);

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