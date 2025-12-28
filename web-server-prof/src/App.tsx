/******************************************************************************
 * App.js
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Top from "./components/top/top";
import Artworks from "./components/pages/artworks";
import Otherworks from "./components/pages/otherworks";
import Production from "./components/pages/about";
import Contact from "./components/pages/contact";
import Blog from "./components/pages/blog";
import Header from './components/header/Header3'
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
