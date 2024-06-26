import React, { useState, useEffect } from "react";
import { BsPersonSquare, BsFillPersonVcardFill } from "react-icons/bs";
import axios from "axios";
import ProfileCard from "./ProfileCard";

const ProfileCardIndex = () => {
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState(null);
  const loggedInUserId = localStorage.getItem('loggedInUserId');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://cmti-edge.online/smddc/user.php?id=${loggedInUserId}`);
        const userData = response.data; // Assuming the API returns an array with a single user object
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [loggedInUserId]);

  const handleIconClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="user-index">
      <div className="icon" onClick={handleIconClick}>
        {isActive ? <BsPersonSquare /> : <BsFillPersonVcardFill />}
      </div>
      {isActive && user && <ProfileCard user={user} />}
    </div>
  );
};

export default ProfileCardIndex;