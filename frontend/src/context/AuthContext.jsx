import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Mock initial user state. 
  // Change role to 'admin' to test admin access, or null to test being logged out.
  const [user, setUser] = useState({
    name: 'Test User',
    email: 'user@techevent.com',
    role: 'user', // Options: 'user', 'admin'
    isAuthenticated: true,
  });

  const login = (userData) => {
    // In a real app, you would make an API call here and save the JWT token
    setUser({ ...userData, isAuthenticated: true });
  };

  const logout = () => {
    // Clear user data and tokens
    setUser({ name: '', email: '', role: '', isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access to auth context
export const useAuth = () => {
  return useContext(AuthContext);
};