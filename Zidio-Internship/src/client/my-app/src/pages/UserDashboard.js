import React from "react";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const avatar = localStorage.getItem("avatar");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Welcome to your Dashboard</h2>
      {avatar && <img src={avatar} alt="Avatar" className="rounded-circle mt-3" width={100} />}
      <div>
        <button className="btn btn-outline-danger mt-4" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserDashboard;
