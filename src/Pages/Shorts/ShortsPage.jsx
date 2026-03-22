import React from "react";
import { shortsData } from "../../data";
import "./ShortsPage.css";

const ShortsPage = () => {
  return (
    <div className="shorts-page">
      {shortsData.map((short) => (
        <div className="shorts-page-card" key={short.id}>
          <iframe
            src={`https://www.youtube.com/embed/${short.id}`}
            title={short.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>

          <div className="shorts-page-info">
            <h3>{short.title}</h3>
            <p>{short.channel}</p>
            <span>{short.views}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShortsPage;