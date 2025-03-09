import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "/pages/Home.jsx";
import About from "";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
