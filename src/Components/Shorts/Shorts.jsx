import React from "react";
import { Link } from "react-router-dom";
import { shortsData } from "../../data";
import "./Shorts.css";

const Shorts = () => {
  return (
    <div className="shorts">
      <div className="shorts-header">
        <h3>Shorts</h3>
        <Link to="/shorts" className="see-all-shorts">
          See all
        </Link>
      </div>

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