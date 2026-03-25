import React from "react";
import "./ProfilePage.css";
import profileImg from "../../assets/profile.jpg";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <img src={profileImg} alt="profile" className="profile-avatar" />

        <h1>Dzenan</h1>
        <p className="profile-username">@dzenan</p>
        <p className="profile-bio">
          Welcome to my VidTube profile page.
        </p>

        <div className="profile-stats">
          <div>
            <h3>24</h3>
            <p>Videos</p>
          </div>
          <div>
            <h3>8.2K</h3>
            <p>Subscribers</p>
          </div>
          <div>
            <h3>120K</h3>
            <p>Views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;