import React, { useState, useCallback } from "react";
import axios from 'axios';
import './Login.css';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaSquare } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast, ToastContainer } from 'react-bootstrap';
import debounce from 'lodash.debounce';

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [empID, setEmpID] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("operator");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      password: ''
    }
  });

  const { errors } = formState;

  const validateEmail = useCallback(debounce(async (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const blacklistedDomains = ['baddomain.com', 'example.com'];
    const domain = email.split('@')[1];

    if (!emailRegex.test(email)) {
      setEmailError("Invalid Email Format");
    } else if (email === 'admin@gmail.com') {
      setEmailError("Enter a different email address");
    } else if (blacklistedDomains.includes(domain)) {
      setEmailError("This email is not supported");
    } else {
      setEmailError("");
    }
  }, 300), []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const onSubmit = async (data) => {
    if (emailError) {
      return;
    }

    try {
      const response = await axios.post("https://cmti-edge.online/smddc/user.php", {
        action: 'register',
        username: data.username,
        email: data.email,
        empID: data.empID,
        phoneNumber: data.phoneNumber,
        password: data.password,
        role: data.role,
      });

      if (response && response.status === 201) {
        setToastType("success");
        setToastMessage("User registered successfully!");
        setShowToast(true);
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        setToastType("error");
        setToastMessage("Registration failed. Please try again.");
        setShowToast(true);
      }
    } catch (error) {
      setToastType("error");
      setToastMessage("Error creating user. Please try again.");
      setShowToast(true);
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="sign-heading">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="sign-form">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            {...register('username', { required: 'Username is required' })}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {errors.username && <p className="errors">{errors.username.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register('email', { required: 'Email is required' })}
            onChange={handleEmailChange}
            value={email}
          />
          {emailError && <p className="errors">{emailError}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="empID" className="form-label">Employee ID</label>
          <input
            type="text"
            className="form-control"
            id="empID"
            {...register('empID', { required: 'Employee ID is required' })}
            value={empID}
            onChange={(e) => setEmpID(e.target.value)}
            required
          />
          {errors.empID && <p className="errors">{errors.empID.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            {...register('phoneNumber', {
              required: 'Phone Number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Phone Number must be 10 digits'
              }
            })}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          {errors.phoneNumber && <p className="errors">{errors.phoneNumber.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long'
                },
                maxLength: {
                  value: 18,
                  message: 'Password must be less than 18 characters long'
                },
                pattern: {
                  value: /^(?=.*[!@#$%^&*])(?=.*\d).+$/,
                  message: 'Password must contain at least one special character and one number'
                }
              })}
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
          {errors.password && <p className="errors">{errors.password.message}</p>}
        </div>
        <div className="role_body d-flex">
          <div className="mb-3">
            <label className="form-label">Role</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                id="roleOperator"
                value="operator"
                {...register('role')}
                checked={role === "operator"}
                onChange={() => setRole("operator")}
              />
              <label className="form-check-label" htmlFor="roleOperator">Operator</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                id="roleSupervisor"
                value="supervisor"
                {...register('role')}
                checked={role === "supervisor"}
                onChange={() => setRole("supervisor")}
              />
              <label className="form-check-label" htmlFor="roleSupervisor">Supervisor</label>
            </div>
          </div>
          <button type="submit" className="form-btn d-flex ms-5 mt-4">Sign Up</button>
        </div>
      </form>

      <ToastContainer position="top-end" className="p-3">
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={1500} autohide>
          <Toast.Header>
            <FaSquare className="rounded me-2" style={{ color: toastType === "success" ? "green" : "red" }} size={30} />
            <strong className="me-auto">{toastType === "success" ? "Registration Successful" : "Registration Error"}</strong>
            <small className="text-muted">just now</small>
            <button type="button" className="ms-2 mb-1 close" onClick={() => setShowToast(false)}>
<span aria-hidden="true">×</span>
</button>
</Toast.Header>
<Toast.Body>{toastMessage}</Toast.Body>
</Toast>
</ToastContainer>
</div>
);
};

export default SignUp;
