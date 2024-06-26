// Import necessary dependencies
import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import './Login.css'
import CmtiLogo from '../../Images/cmti-logo.png';
import bgvido from "../../Images/bg images/bgvideo.mp4"

// Define UserIndex component
export const UserIndex = () => {
  // State variable to toggle between sign up and sign in forms
  const [showSignUp, setShowSignUp] = useState(true);

  // Toggle between sign up and sign in forms
  const handleToggle = () => {
    setShowSignUp(!showSignUp);
  };


  // Render UserIndex component
  return (
    <div>
      <div className=" d-flex justify-content-center align-items-center bg-black">
        <div className="reg_cmti_logos">
          <img src={CmtiLogo} alt="cmtilogo" />
        </div>
        <nav className='reg_nav_bar'>
          <h1 className='reg_nav_text' >Central Manufacturing Technology Institute</h1>
        </nav>
      </div>
      <div className="registration-container">
        <video autoPlay loop muted>
          <source src={bgvido} type="video/mp4" />
        </video>
        <div className="form-body">
          <div className="form-containers">
            <div className="">
              <div className="card-header">
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className={`btn ${showSignUp ? "btn-primary" : "btn-outline-primary bg-white text-black"}`}
                    onClick={handleToggle}
                  >
                    Sign Up
                  </button>
                  <button
                    type="button"
                    className={`btn ${!showSignUp ? "btn-primary" : "btn-outline-primary bg-white text-black"}`}
                    onClick={handleToggle}
                  >
                    Sign In
                  </button>
                </div>
              </div>
              <div className="card-body">
                {showSignUp ? <SignUp /> : <SignIn />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

// Export UserIndex component
export default UserIndex;
