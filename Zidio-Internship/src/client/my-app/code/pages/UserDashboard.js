import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // ✅ Correct named import
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const decoded = jwtDecode(token); // ✅ Correct usage
      axios
        .get(`http://localhost:5000/api/users/${decoded.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setUser(res.data))
        .catch((err) => {
          console.error(err);
          navigate('/login');
        });
    } catch (err) {
      console.error('Invalid token:', err);
      localStorage.removeItem('token');
      navigate('/login');
    }
  }, [navigate]);

  if (!user) return <div className="text-light text-center mt-5">Loading...</div>;

  return (
    <div className="container text-light mt-5">
      <div className="card bg-dark border-info p-4">
        <h2 className="text-info mb-4">Welcome, {user.name}!</h2>
        <img
          src={user.avatar}
          alt="Avatar"
          className="rounded-circle"
          style={{ width: '100px', height: '100px' }}
        />
        <p className="mt-3">Email: {user.email}</p>
        <button
          className="btn btn-outline-danger mt-4"
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/login');
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
