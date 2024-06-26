import React from 'react';
import './ProfileCard.css';
import profileImg from "../../Images/bg images/avatar.png"

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <div className="profile-photo">
        <img src={profileImg} alt={`${user.name}'s profile`} />
      </div>
      <div>
        <h2>{user.username}</h2>
        <p>Employee ID: {user.empID}</p>
        <p>Role: {user.role}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phoneNumber}</p>
      </div>
    </div>
  );
};

export default ProfileCard;