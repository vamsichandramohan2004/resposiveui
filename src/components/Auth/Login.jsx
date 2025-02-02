import React, { useState } from "react";
import { signInWithGoogle, logOut } from "./firebase"; // Import Firebase functions
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./Login.css";

const Login = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [user, setUser] = useState(null); // Store logged-in user info
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [users, setUsers] = useState([]); // Store registered users (dummy purpose)
  const [loginError, setLoginError] = useState("");

  // Toggle between Sign Up and Sign In
  const handleToggle = () => {
    setIsSignUpActive(!isSignUpActive);
    setLoginError("");
  };

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    const userInfo = await signInWithGoogle();
    setUser(userInfo);
    window.location.href = "/setup-organization"; // Redirect to setup page
  };

  // Handle Logout
  const handleLogout = async () => {
    await logOut();
    setUser(null);
  };

  // Handle form submission for Sign Up or Sign In
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your login/signup logic here (with Firebase or custom logic)
    // For now, we assume successful login/signup, so redirect to the setup page:
    window.location.href = "/setup-organization";
  };

  return (
    <div className={`container ${isSignUpActive ? "active" : ""}`} id="container">
      {/* Signup Form */}
      <div className="form-container sign-up">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon" onClick={handleGoogleLogin}>
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" name="name" placeholder="Name" onChange={handleInputChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      {/* Sign-in Form */}
      <div className="form-container sign-in">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon" onClick={handleGoogleLogin}>
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
          <span>or use your email password</span>
          <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
          <a href="#">Forgot Your Password?</a>
          {loginError && <p className="error-message">{loginError}</p>}
          <button type="submit">Sign In</button>
        </form>

        {/* Show logged-in user info */}
        {user && (
          <div className="user-info">
            <p>Welcome, {user.displayName}</p>
            {/* <img src={user.photoURL} alt="User Profile" /> */}
            {/* <button onClick={handleLogout}>Log Out</button> */}
          </div>
        )}
      </div>

      {/* Toggle Panel */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="btn-primary" onClick={handleToggle}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className="btn-primary" onClick={handleToggle}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;