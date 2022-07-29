import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';


import Navbar from './components/Navbar';
import  Home  from './components/screens/Home';
import  Signin  from './components/screens/SignIn';
import Profile  from './components/screens/Profile';
import  Signup  from './components/screens/Signup';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />\
    </Routes>




    </BrowserRouter>


  );
}

export default App;