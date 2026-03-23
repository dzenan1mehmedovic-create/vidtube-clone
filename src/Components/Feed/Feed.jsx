import React from "react";
import { Link } from "react-router-dom";
import { videoData } from "../../data";
import "./Feed.css";

const categoryNames = {
  0: "General",
  2: "Automobiles",
  10: "Music",
  17: "Sports",
  20: "Gaming",
  22: "Blogs",
  24: "Entertainment",
  25: "News",
  28: "Technology",
};

const Feed = ({ category, searchQuery = "" }) => {
  const filteredByCategory =
    category === 0
      ? videoData
      : videoData.filter((video) => video.category === category);

  const query = searchQuery.trim().toLowerCase();

  const filteredVideos = filteredByCategory.filter((video) => {
    const categoryName = categoryNames[video.category]?.toLowerCase() || "";

    return (
      video.title.toLowerCase().includes(query) ||
      video.channel.toLowerCase().includes(query) ||
      video.description.toLowerCase().includes(query) ||
      categoryName.includes(query)
    );
  });

  return (
    <div className="feed">
      {filteredVideos.length > 0 ? (
        filteredVideos.map((video) => (
          <Link
            to={`/video/${video.category}/${video.id}`}
            className="card"
            key={`${video.category}-${video.id}-${video.title}`}
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