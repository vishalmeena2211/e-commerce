import { Routes } from "react-router-dom";
import Navbar from "./components/comman/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import React, { useEffect, useState } from 'react';
import './index.css'
import Footer from "./components/comman/Footer";
import Banner from "./components/comman/Banner";
import Otp from "./components/Otp";
// import Settings from "./components/Setting";




const App = () => {

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY + window.scrollY });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('scroll', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('scroll', updateCursorPosition);
    };
  }, []);

  
  
  return (<div className="relative">
        <Banner/>
        <div className="bg-[#221b45]">
          <Navbar/>
          
        </div>
          {/* <Settings/> */}
        <div
        className="cursor-circle"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      ></div>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/otp" element={<Otp/>} />
        </Routes>
        
        <Footer/>
  </div>)
};

export default App;
