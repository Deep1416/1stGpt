// import React from 'react'
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from './pages/HomePage';
import Pricing from './getStarted/pricing/Pricing';
import Layout from './getStarted/layout/Layout';
import Aimodals from './getStarted/aiModals/Aimodals'
import ChatBot from './getStarted/chat/ChatBot'
import Profile from './getStarted/userProfile/Profile'

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token is expired on page load
    const token = localStorage.getItem('token');
    if (token) {
      console.log(token)
      const payload = JSON.parse(atob(token.split('.')[1])); // Decoding JWT token
      if (payload.exp * 1000 < Date.now()) {
        // Token is expired
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        navigate('/');
      }
    }
  } ,[]);

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/get" element={<Layout />}>
          <Route index element={<ChatBot />} />
          <Route path="aimodels" element={<Aimodals />} />
          <Route path="profile" element={<Profile />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App