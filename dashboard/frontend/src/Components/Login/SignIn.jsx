import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaSquare } from "react-icons/fa";
import { Toast, ToastContainer } from 'react-bootstrap';
import './Login.css';

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("operator");
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false); // State to control toast visibility
  const [toastMessage, setToastMessage] = useState(""); // State to control toast message
  const [toastType, setToastType] = useState(""); // State to control toast type (success or error)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://cmti-edge.online/smddc/user.php",
        {
          action: 'signin',
          email,
          password,
          role: role.toLowerCase(),
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response && response.status === 200) {
        setToastType("success");
        setToastMessage("Sign in successful!");
        setShowToast(true);
        const authHeader = 'Basic ' + btoa(email + ':' + role.toLowerCase());
        localStorage.setItem('authHeader', authHeader); // Store auth header
        localStorage.setItem('loggedInUserId', response.data.id);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        setToastType("error");
        setToastMessage("Incorrect email, password, or role. Please try again.");
        setShowToast(true);
      }
    } catch (error) {
      if (error.response) {
        setToastType("error");
        setToastMessage(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        setToastType("error");
        setToastMessage("No response received from the server. Please try again.");
      } else {
        setToastType("error");
        setToastMessage("Error in setting up the request.");
      }
      setShowToast(true);
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="form-signin">
      <h2 className="sign-heading">Sign In</h2>
      <form onSubmit={handleSubmit} className="sign-form">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="hide_show btn"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <select className="form-select" id="role" value={role} onChange={(e) => setRole(e.target.value.toLowerCase())} required>
            <option value="operator">Operator</option>
            <option value="supervisor">Supervisor</option>
          </select>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button type="submit" className="form-btn mt-4">Sign In</button>
        </div>
      </form>

      {/* Bootstrap toast */}
      <ToastContainer position="top-end" className="p-3">
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={2000} autohide>
          <Toast.Header>
            <FaSquare className="rounded me-2" style={{ color: toastType === "success" ? "green" : "red" }} size={30} />
            <strong className="mr-auto">
              {toastType === "success" ? "Login Successfully" : "Login Error"}
            </strong>
            <small className="text-muted">just now</small>
            <button type="button" className="ml-2 mb-1 close" onClick={() => setShowToast(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default SignIn;
