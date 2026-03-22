import React from "react";
import { Link } from "react-router-dom";
import { videoData } from "../../data";
import "./Feed.css";

const Feed = ({ category, searchQuery }) => {
  const filteredByCategory =
    category === 0
      ? videoData
      : videoData.filter((video) => video.category === category);

  const filteredVideos = filteredByCategory.filter((video) => {
    const query = searchQuery.toLowerCase();

    return (
      video.title.toLowerCase().includes(query) ||
      video.channel.toLowerCase().includes(query)
    );
  });

  return (
    <div className="feed">
      {filteredVideos.length > 0 ? (
        filteredVideos.map((video) => (
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
        ))
      ) : (
        <p className="no-results">Nema rezultata za pretragu.</p>
      )}
    </div>
  );
};

export default Feed;