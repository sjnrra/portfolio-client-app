/******************************************************************************
 * App.js
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Top from "./components/top/Top";
import Artworks from "./components/pages/ArtWorks/Artworks";
import Otherworks from "./components/pages/Otherworks";
import Production from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
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
        <Route path="/artworks" element={<Artworks />} />
        <Route path="/otherworks" element={<Otherworks />} />
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
