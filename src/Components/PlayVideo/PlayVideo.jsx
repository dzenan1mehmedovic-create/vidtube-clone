import React from "react";
import { useParams } from "react-router-dom";
import "./PlayVideo.css";

const PlayVideo = () => {
  const { videoId } = useParams();

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
        title="video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <h3>Best YouTube Channel To Learn Web Development</h3>

      <div className="play-video-info">
        <p>1525 Views • 2 days ago • Video ID: {videoId}</p>

        <div className="video-actions">
          <span>👍 125</span>
          <span>👎 2</span>
          <span>↗ Share</span>
          <span>💾 Save</span>
        </div>
      </div>

      <hr />

      <div className="publisher">
        <img
          src="https://i.pravatar.cc/60?img=12"
          alt=""
        />

        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>

        <button>Subscribe</button>
      </div>

      <div className="vid-description">
        <p>
          Channel that makes learning web development easy for everyone.
        </p>
        <p>
          Learn React, JavaScript, CSS, responsive design and complete
          projects step by step.
        </p>
        <hr />
        <h4>130 Comments</h4>
      </div>
    </div>
  );
};

export default PlayVideo;