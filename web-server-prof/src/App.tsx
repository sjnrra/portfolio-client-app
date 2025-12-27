/******************************************************************************
 * App.js
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Top from "./components/pages/homes/top";
import Artworks from "./components/pages/homes/artworks";
import Otherworks from "./components/pages/homes/otherworks";
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
