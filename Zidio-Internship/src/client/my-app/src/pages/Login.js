import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../../Zidio-Internship/src/client/my-app/src/pages/Login.css'; // Import the CSS file

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // In a real application, you would send these credentials to your backend
    if (username === "testuser" && password === "password") {
      localStorage.setItem("token", "mocked-jwt");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleGoogleLogin = () => {
    localStorage.setItem("token", "google-jwt");
    navigate("/");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username or Email:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="remember" /> Remember Me
            </label>
          </div>
          <button type="submit" className="btn btn-primary login-button">Login</button>
          <button type="button" className="btn btn-danger ms-3 google-button" onClick={handleGoogleLogin}>
            Login with Google
          </button>
        </form>
        <p className="mt-3">
          <button className="btn btn-secondary signup-button" onClick={goToSignup}>
            Don't have an account? Sign up
          </button>
        </p>
        <p className="mt-2">
          <a href="/forgot-password" style={{ color: '#ccc', textDecoration: 'none' }}>Forgot Password?</a>
        </p>
      </div>
    </div>
  );
}

export default Login;