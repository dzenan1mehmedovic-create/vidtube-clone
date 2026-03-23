import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { videoData } from "../../data";
import "./SearchResults.css";

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

const SearchResults = ({ sidebar, setSearchQuery }) => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").trim().toLowerCase();

  useEffect(() => {
    setSearchQuery(searchParams.get("q") || "");
  }, [searchParams, setSearchQuery]);

  const filteredVideos = videoData.filter((video) => {
    const categoryName = categoryNames[video.category]?.toLowerCase() || "";

    return (
      video.title.toLowerCase().includes(query) ||
      video.channel.toLowerCase().includes(query) ||
      video.description.toLowerCase().includes(query) ||
      categoryName.includes(query)
    );
  });

  return (
    <div className={`search-results ${sidebar ? "" : "large-container"}`}>
      <h2 className="search-title">
        {query ? `Search results for "${searchParams.get("q")}"` : "Search results"}
      </h2>

      {filteredVideos.length > 0 ? (
        <div className="search-results-list">
          {filteredVideos.map((video) => (
            <Link
              to={`/video/${video.category}/${video.id}`}
              className="search-result-card"
              key={`${video.category}-${video.id}-${video.title}`}
            >
              <img src={video.image} alt={video.title} className="search-thumb" />

              <div className="search-result-info">
                <h3>{video.title}</h3>
                <p className="search-channel">{video.channel}</p>
                <p className="search-meta">
                  {video.views} • {video.time}
                </p>
                <p className="search-description">{video.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="no-search-results">
          <h3>No videos found</h3>
          <p>Try searching with another keyword.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;