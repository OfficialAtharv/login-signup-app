import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Stylings/Style.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import axios from "axios";

const LoginRegistration = () => {
  const [isActive, setIsActive] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [userType, setUserType] = useState("user");

  const toggleForm = () => {
    setIsActive(!isActive);
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const userName = e.target[0].value;
    const userEmail = e.target[1].value;
    const address = e.target[2].value;
    const password = e.target[3].value;
    const confirmPasswordValue = e.target[4].value;

    // Check if passwords match
    if (password !== confirmPasswordValue) {
      alert("Passwords do not match!");
      return;
    }

    // Create user object to send to backend
    const userData = {
      userName,
      userEmail,
      userPassword: password,
      address,
    };

    // Send POST request to Spring Boot backend for registration
    try {
      await axios.post("http://localhost:8080/api/users/addUser", userData);
      alert("Registered successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Registration failed!");
    }
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();
      console.log("Response from server:", result);

      if (response.ok && result === true) {
        alert(`Logged in successfully! Welcome, ${email}`);
        navigate("/");
      } else {
        alert("Login failed! Please check your email or password.");
      }
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  };
  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate("/forgot-password");
  };

  const bodyStyle = {
    fontFamily: '"Poppins", sans-serif',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundImage: 'url("/Assets/img3.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={bodyStyle}>
      <div className={`wrapper ${isActive ? "active" : ""}`}>
        <div className="form-box login">
          <div className="user-type-selection">
            <input
              type="radio"
              id="userOption"
              className="user-type-input"
              value="user"
              checked={userType === "user"}
              onChange={() => setUserType("user")}
            />
            <label htmlFor="userOption" className="user-type-label">
              User
            </label>

            <input
              type="radio"
              id="serviceProviderOption"
              className="user-type-input"
              value="serviceProvider"
              checked={userType === "serviceProvider"}
              onChange={() => setUserType("serviceProvider")}
            />
            <label htmlFor="serviceProviderOption" className="user-type-label">
              Service Provider
            </label>
          </div>

          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a className="cursor-pointer" onClick={handleForgotPassword}>
                Forgot Password
              </a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={toggleForm}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <div className="user-type-selection">
            <input
              type="radio"
              id="userOption"
              className="user-type-input"
              value="user"
              checked={userType === "user"}
              onChange={() => setUserType("user")}
            />
            <label htmlFor="userOption" className="user-type-label">
              User
            </label>

            <input
              type="radio"
              id="serviceProviderOption"
              className="user-type-input"
              value="serviceProvider"
              checked={userType === "serviceProvider"}
              onChange={() => setUserType("serviceProvider")}
            />
            <label htmlFor="serviceProviderOption" className="user-type-label">
              Service Provider
            </label>
          </div>

          <form onSubmit={handleRegisterSubmit}>
            <h1>Registration</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <MdEmail className="icon" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Address" required />
              <FaHome className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />I agree to the terms & conditions
              </label>
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
              <p>
                Already have an account?{" "}
                <a href="#" onClick={toggleForm}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegistration;










NEXT_FORM.JSX
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Next_form = () => {
    const [userType, setUserType] = useState('');
  const navigate = useNavigate();
  const handleSelection = (type) => {
    setUserType(type);
    // Redirect based on the userType selected
    if (type === 'user') {
      navigate('/'); // Redirect to user dashboard page
    } else if (type === 'serviceProvider') {
      navigate('/Service_Provider/Service_Provider_Details'); // Redirect to service provider dashboard page
    }
  };
const bodystyle={
    backgroundImage: 'url("/Assets/img3.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
}


  return (
    <div  style={bodystyle} className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-6">Please select your role</h2>

      <div className="flex justify-center space-x-6">
        <label 
          className={`cursor-pointer px-6 py-3 border-2 rounded-full transition-all duration-300 
          ${userType === 'user' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} 
          hover:bg-blue-500 hover:text-white`}
        >
          <input
            type="radio"
            name="userType"
            value="user"
            onChange={() => handleSelection('user')}
            checked={userType === 'user'}
            className="hidden"
          />
          USER
        </label>

        <label
          className={`cursor-pointer px-6 py-3 border-2 rounded-full transition-all duration-300 
          ${userType === 'serviceProvider' ? 'bg-green-500 text-white' : 'bg-white text-green-500'} 
          hover:bg-green-500 hover:text-white`}
        >
          <input
            type="radio"
            name="userType"
            value="serviceProvider"
            onChange={() => handleSelection('serviceProvider')}
            checked={userType === 'serviceProvider'}
            className="hidden"
          />
          SERVICE PROVIDER
        </label>
      </div>
    </div>
  </div>
  )
}

export default Next_form





















Login Registration as on 8/11/2024 18.56
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Stylings/Style.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import axios from "axios";

const LoginRegistration = () => {
  const [isActive, setIsActive] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsActive(!isActive);
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const userName = e.target[0].value;
    const userEmail = e.target[1].value;
    const address = e.target[2].value;
    const password = e.target[3].value;
    const confirmPasswordValue = e.target[4].value;

    // Check if passwords match
    if (password !== confirmPasswordValue) {
      alert("Passwords do not match!");
      return;
    }
   
    // Create user object to send to backend
    const userData = {
      userName,
      userEmail,
      userPassword: password,
      address,
    };
   
    // Send POST request to Spring Boot backend for registration
    try {
      await axios.post("http://localhost:8080/api/users/addUser", userData);
      alert("Registered successfully!");
      navigate("/Next_form");
    } catch (error) {
      console.error(error);
      alert("Registration failed!");
    }
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();
      console.log("Response from server:", result);

      if (response.ok && result === true) {
        alert(`Logged in successfully! Welcome, ${email}`);
        navigate("/");
      } else {
        alert("Login failed! Please check your email or password.");
      }
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  };
  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate("/forgot-password");
  };

  const bodyStyle = {
    fontFamily: '"Poppins", sans-serif',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundImage: 'url("/Assets/img3.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={bodyStyle}>
      <div className={`wrapper ${isActive ? "active" : ""}`}>
        <div className="form-box login">
          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a className="cursor-pointer" onClick={handleForgotPassword}>
                Forgot Password
              </a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={toggleForm}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form onSubmit={handleRegisterSubmit}>
            <h1>Registration</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <MdEmail className="icon" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Address" required />
              <FaHome className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />I agree to the terms & conditions
              </label>
            </div>
            <button type="submit">Next</button>
            <div className="register-link">
              <p>
                Already have an account?{" "}
                <a href="#" onClick={toggleForm}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegistration;
