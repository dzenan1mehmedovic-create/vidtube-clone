import React from "react";
import "./Shorts.css";

const shortsData = [
  {
    id: "dQw4w9WgXcQ",
    title: "Never Gonna Give You Up",
  },
  {
    id: "3JZ_D3ELwOQ",
    title: "Top Coding Tips",
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Best Music Shorts",
  },
  {
    id: "L_jWHffIx5E",
    title: "Funny Moments",
  },
  {
    id: "9bZkp7q19f0",
    title: "Viral Short",
  },
];

const Shorts = () => {
  return (
    <div className="shorts">
      <h3>Shorts</h3>

      <div className="shorts-container">
        {shortsData.map((short) => (
          <div key={short.id} className="short-card">
            <iframe
              src={`https://www.youtube.com/embed/${short.id}`}
              title={short.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p>{short.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shorts;