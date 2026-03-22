import React from "react";
import { Link, useParams } from "react-router-dom";
import { videoData } from "../../data";
import "./Recommended.css";

const Recommended = () => {
  const { videoId } = useParams();

  const filteredRecommended = videoData.filter((video) => video.id !== videoId);

  return (
    <div className="recommended">
      {filteredRecommended.map((video) => (
        <Link
          to={`/video/${video.category}/${video.id}`}
          className="side-video-list"
          key={video.id}
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