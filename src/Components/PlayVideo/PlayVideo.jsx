import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { videoData } from "../../data";
import "./PlayVideo.css";

const defaultVideoState = {
  likes: 125,
  dislikes: 2,
  liked: false,
  disliked: false,
  saved: false,
};

const PlayVideo = () => {
  const { videoId } = useParams();

  const currentVideo = videoData.find((video) => video.id === videoId);

  const storageKey = useMemo(() => `vidtube-video-${videoId}`, [videoId]);
  const subscribeKey = useMemo(
    () => `vidtube-subscribe-${currentVideo?.channel || "unknown"}`,
    [currentVideo?.channel]
  );

  const [videoState, setVideoState] = useState(() => {
    const savedVideoState = JSON.parse(localStorage.getItem(`vidtube-video-${videoId}`));
    return savedVideoState ?? defaultVideoState;
  });

  const [subscribed, setSubscribed] = useState(() => {
    const savedSubscribeState = JSON.parse(
      localStorage.getItem(`vidtube-subscribe-${currentVideo?.channel || "unknown"}`)
    );
    return savedSubscribeState ?? false;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(videoState));
  }, [storageKey, videoState]);

  useEffect(() => {
    localStorage.setItem(subscribeKey, JSON.stringify(subscribed));
  }, [subscribeKey, subscribed]);

  if (!currentVideo) {
    return (
      <div className="play-video">
        <h3>Video nije pronađen.</h3>
      </div>
    );
  }

  const handleLike = () => {
    setVideoState((prev) => {
      if (prev.liked) {
        return {
          ...prev,
          liked: false,
          likes: prev.likes - 1,
        };
      }

      return {
        ...prev,
        liked: true,
        likes: prev.likes + 1,
        disliked: prev.disliked ? false : prev.disliked,
        dislikes: prev.disliked ? prev.dislikes - 1 : prev.dislikes,
      };
    });
  };

  const handleDislike = () => {
    setVideoState((prev) => {
      if (prev.disliked) {
        return {
          ...prev,
          disliked: false,
          dislikes: prev.dislikes - 1,
        };
      }

      return {
        ...prev,
        disliked: true,
        dislikes: prev.dislikes + 1,
        liked: prev.liked ? false : prev.liked,
        likes: prev.liked ? prev.likes - 1 : prev.likes,
      };
    });
  };

  const handleSave = () => {
    setVideoState((prev) => ({
      ...prev,
      saved: !prev.saved,
    }));
  };

  const handleSubscribe = () => {
    setSubscribed((prev) => !prev);
  };

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
          <span
            className={videoState.liked ? "action-btn active-action" : "action-btn"}
            onClick={handleLike}
          >
            👍 {videoState.likes}
          </span>

          <span
            className={videoState.disliked ? "action-btn active-action" : "action-btn"}
            onClick={handleDislike}
          >
            👎 {videoState.dislikes}
          </span>

          <span className="action-btn">↗ Share</span>

          <span
            className={videoState.saved ? "action-btn active-action" : "action-btn"}
            onClick={handleSave}
          >
            💾 {videoState.saved ? "Saved" : "Save"}
          </span>
        </div>
      </div>

      <hr />

      <div className="publisher">
        <img src={currentVideo.profile} alt={currentVideo.channel} />

        <div>
          <p>{currentVideo.channel}</p>
          <span>{currentVideo.subscribers}</span>
        </div>

        <button
          className={subscribed ? "subscribed-btn" : ""}
          onClick={handleSubscribe}
        >
          {subscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>

      <div className="vid-description">
        <p>{currentVideo.description}</p>
        <p>
          Watch more tutorials, highlights and interesting videos related to
          this topic.
        </p>
        <hr />
        <h4>130 Comments</h4>
      </div>
    </div>
  );
};

export default PlayVideo;