import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import GetStarted from './pages/GetStarted';
import Pricing from './getStarted/pricing/Pricing';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        {/* <Route path="/" element={<Pricing />}/> */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App