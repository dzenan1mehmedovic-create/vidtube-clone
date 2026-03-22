import React from "react";
import { useParams } from "react-router-dom";
import "./Video.css";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";

const Video = () => {
  const { videoId } = useParams();

  return (
    <div className="play-container">
      <PlayVideo key={videoId} />
      <Recommended key={`rec-${videoId}`} />
    </div>
  );
};

export default Video;