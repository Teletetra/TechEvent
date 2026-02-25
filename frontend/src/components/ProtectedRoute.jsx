import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import real Auth Context

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user } = useAuth(); // Pull real user data from state

  if (!user.isAuthenticated) {
    // Not logged in -> redirect to home/login
    return <Navigate to="/" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    // Logged in, but wrong role (e.g., standard user trying to view Admin Vendor page)
    alert("Access Denied: You do not have the required permissions.");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;