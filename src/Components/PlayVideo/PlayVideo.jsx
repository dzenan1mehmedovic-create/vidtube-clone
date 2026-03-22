import React from "react";
import { useParams } from "react-router-dom";
import "./PlayVideo.css";

const PlayVideo = () => {
  const { videoId } = useParams();

  return (
    <div className="play-video">

      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="video"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <h3>Best YouTube Channel To Learn Web Development</h3>

      <p>Video ID: {videoId}</p>

    </div>
  );
};

export default PlayVideo;