// ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const ProtectedRoute = ({ element: Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // JWT exp is in seconds

        // Check if token is expired
        if (decodedToken.exp > currentTime) {
          setIsAuthenticated(true);
        } else {
          // Token is expired
          localStorage.removeItem('token');
          localStorage.removeItem('userInfo');
          setIsAuthenticated(false);
          navigate('/');
        }
      } catch (error) {
        // Token is invalid
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        setIsAuthenticated(false);
        navigate('/');
      }
    } else {
      setIsAuthenticated(false);
      navigate('/');
    }
  }, [token, navigate]);

  // Render nothing while checking authentication
  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? Element : null;
};

export default ProtectedRoute;
