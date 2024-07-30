import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Pricing from './getStarted/pricing/Pricing';
import Layout from './getStarted/layout/Layout';
import Aimodals from './getStarted/aiModals/Aimodals'
import ChatBot from './getStarted/chat/ChatBot'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/get" element={<Layout />}>
          <Route index element={<ChatBot />} />
          <Route path="aimodels" element={<Aimodals />} />
          <Route path="profile" element={<Aimodals />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App