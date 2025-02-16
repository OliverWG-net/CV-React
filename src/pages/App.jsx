import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import PortfolioPage from "./PortfolioPage.jsx";
import ContactPage from "./ContactPage.jsx";
import AboutPage from "./AboutPage.jsx";
import Navbar from "../components/Navbar.jsx";
import CV from "./CV.jsx";
import Footer from '../components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}


