/******************************************************************************
 * App.js
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';

import Top from "./components/pages/homes/top";
import Profile from "./components/pages/homes/profile";
import Skill from "./components/pages/homes/skill";
import Production from "./components/pages/homes/production";
import Contact from "./components/pages/homes/contact";
import NoMatch from "./components/pages/homes/nomatch";
import Blog from "./components/pages/homes/blog";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

/*************************************************
 * App
 *************************************************/
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/production" element={<Production />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Top />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
