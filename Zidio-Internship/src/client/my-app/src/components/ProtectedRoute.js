import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("token");
  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
