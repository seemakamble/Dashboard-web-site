import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Carrer from "./Carrer";
import About from "./About";
import Knowledge from "./Knowledge";
import Project from "./Projects";
import Partner from "./Partner";
import Gallery from "./Gallery";
import Header from "./Header";
import "./style.css";
import Footer from "./Footer";

export default function Routepage() {
  return (
    <div className="routepage">
        <div className="allpages">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/carrer" element={<Carrer />} />
          <Route exact path="/gallary" element={<Gallery />} />
          <Route exact path="/partner" element={<Partner />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/knowledge" element={<Knowledge />} />
        </Routes>
      </BrowserRouter>
      </div>
      <Footer /> 
    </div>
  );
}
