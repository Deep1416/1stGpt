// App.js
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Pricing from './getStarted/pricing/Pricing';
import Layout from './getStarted/layout/Layout';
import Aimodals from './getStarted/aiModals/Aimodals';
import ChatBot from './getStarted/chat/ChatBot';
import Profile from './getStarted/userProfile/Profile';
import ProtectedRoute from './components/ProtectedRoute'; // Adjust path if necessary

const App = () => {
  useEffect(() => {
    // Check if token is expired on page load
    const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1])); // Decoding JWT token
      if (payload.exp * 1000 < Date.now()) {
        // Token is expired
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
      }
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/get" element={<ProtectedRoute element={<Layout />} />}>
            <Route index element={<ProtectedRoute element={<ChatBot />} />} />
            <Route path="aimodels" element={<ProtectedRoute element={<Aimodals />} />} />
            <Route path="profile" element={<ProtectedRoute element={<Profile />} />} />
            <Route path="pricing" element={<ProtectedRoute element={<Pricing />} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
