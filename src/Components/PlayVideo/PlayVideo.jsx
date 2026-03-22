import React from "react";
import { useParams } from "react-router-dom";
import { videoData } from "../../data";
import "./PlayVideo.css";

const PlayVideo = () => {
  const { videoId } = useParams();

  const currentVideo = videoData.find((video) => video.id === videoId);

  if (!currentVideo) {
    return (
      <div className="play-video">
        <h3>Video nije pronađen.</h3>
      </div>
    );
  }

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={currentVideo.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <h3>{currentVideo.title}</h3>

      <div className="play-video-info">
        <p>
          {currentVideo.views} • {currentVideo.time}
        </p>

        <div className="video-actions">
          <span>👍 125</span>
          <span>👎 2</span>
          <span>↗ Share</span>
          <span>💾 Save</span>
        </div>
      </div>

      <hr />

      <div className="publisher">
        <img src={currentVideo.profile} alt={currentVideo.channel} />

        <div>
          <p>{currentVideo.channel}</p>
          <span>{currentVideo.subscribers}</span>
        </div>

        <button>Subscribe</button>
      </div>

      <div className="vid-description">
        <p>{currentVideo.description}</p>
        <p>
          Watch more tutorials and practical project videos related to coding,
          frontend development and web technologies.
        </p>
        <hr />
        <h4>130 Comments</h4>
      </div>
    </div>
  );
};

export default PlayVideo;