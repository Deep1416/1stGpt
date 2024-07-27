import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import GetStarted from './pages/GetStarted';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/get-start" element={<GetStarted />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App