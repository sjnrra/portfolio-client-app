/******************************************************************************
 * App.js
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React from "react";
import { Routes, Route } from "react-router-dom";

import Top from "./components/pages/top/Top";
import Artworks from "./components/pages/artworks/Artworks";
import Otherworks from "./components/pages/Otherworks";
import About from "./components/pages/About";
import Contact from "./components/pages/contact/Contact";
import Header from './components/pages/common/Header'
import Footer from './components/pages/common/Footer'

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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Top />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
