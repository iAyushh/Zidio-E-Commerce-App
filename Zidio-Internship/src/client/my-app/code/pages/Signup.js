import React, { useState } from 'react';
import AvatarSelector from '../components/Avatar';
import './Signup.css';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    avatar: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvatarSelect = (avatar) => {
    setFormData({ ...formData, avatar });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      // Replace with your backend URL
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        email: formData.email,
        password: formData.password,
        avatar: formData.avatar,
      });

      // Save the JWT token to localStorage (or cookies)
      localStorage.setItem('token', response.data.token);
      alert('Signup successful!');

      // Redirect to login or dashboard
      window.location.href = '/dashboard';
    } catch (error) {
      console.error(error);
      alert('Signup failed!');
    }
  };

  return (
    <div className="container-fluid signup-wrapper">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-4 card p-4 shadow-lg multiverse-card">
          <h2 className="text-center mb-4 text-light">Create Your Account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <AvatarSelector setAvatar={handleAvatarSelect} />
            <button className="btn btn-primary w-100 mt-3">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
