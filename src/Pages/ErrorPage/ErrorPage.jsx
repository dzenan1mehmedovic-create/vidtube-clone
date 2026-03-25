import React from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-card">
        <h1>Oops!</h1>
        <h2>Page is currently unavailable</h2>
        <p>
          Something went wrong. Please try again in a few minutes.
        </p>

        <button onClick={() => navigate("/")}>Go back home</button>
      </div>
    </div>
  );
};

export default ErrorPage;