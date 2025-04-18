import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';
import logo from '../assets/zidio-logo.png';
import Avatar from '../components/Avatar'; // Import the Avatar component

function Signup() {
  const usernameInputRef = useRef(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAvatarSelection, setShowAvatarSelection] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Signup component mounted or updated.");
    if (usernameInputRef.current) {
      usernameInputRef.current.focus();
    }
  }, []);

  const handleInputChange = (event) => {
    console.log("Input changed:", event.target.name, event.target.value);
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
    else if (name === 'confirmPassword') setConfirmPassword(value);
    console.log("Current state:", { username, email, password, confirmPassword });
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Signing up with:", { username, email, password });
    setShowAvatarSelection(true);
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    console.log("Selected avatar:", avatar);
    localStorage.setItem("token", "newUserTokenWithAvatar");
    navigate("/dashboard");
  };

  const handleSkipAvatar = () => {
    console.log("Skipping avatar selection");
    localStorage.setItem("token", "newUserTokenSkippedAvatar");
    navigate("/dashboard");
  };

  if (showAvatarSelection) {
    return (
      <div className="signup-container">
        <div className="avatar-selection-container">
          <h3>Choose your Avatar (Optional)</h3>
          <Avatar selected={selectedAvatar} setSelected={handleAvatarSelect} />
          <button className="btn btn-primary" onClick={handleSkipAvatar}>Skip for Now</button>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-container">
      <div className="logo-side">
        <img src={logo} alt="Zidio Logo" className="zidio-logo" />
        <div className="starry-lights"></div>
      </div>
      <div className="signup-form-side">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignupSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleInputChange}
                required
                ref={usernameInputRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={email} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={password} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleInputChange} required />
            </div>
            <div className="form-group remember-me">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <button type="submit" className="btn btn-primary signup-button">Sign Up</button>
          </form>
          <p className="mt-3 login-link">
            Already have an account? <Link to="/">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;