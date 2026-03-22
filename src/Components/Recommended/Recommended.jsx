import React from "react";
import { Link, useParams } from "react-router-dom";
import { videoData } from "../../data";
import "./Recommended.css";

const Recommended = () => {
  const { videoId, categoryId } = useParams();

  const sameCategoryVideos = videoData.filter(
    (video) =>
      video.id !== videoId && String(video.category) === String(categoryId)
  );

  const fallbackVideos = videoData.filter((video) => video.id !== videoId);

  const videosToShow =
    sameCategoryVideos.length > 0
      ? sameCategoryVideos.slice(0, 8)
      : fallbackVideos.slice(0, 8);

  return (
    <div className="recommended">
      {videosToShow.map((video) => (
        <Link
          to={`/video/${video.category}/${video.id}`}
          className="side-video-list"
          key={`${video.category}-${video.id}-${video.title}`}
        >
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