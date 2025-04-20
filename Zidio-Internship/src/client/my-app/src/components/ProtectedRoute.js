import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('authToken'); // Check if token exists

    if (isAuthenticated) {
        return children;
    } else {
        return <Navigate to="/" />; // Redirect to login if not authenticated
    }
};

export default ProtectedRoute;