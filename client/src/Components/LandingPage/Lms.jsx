import React from "react";
import LPNav from "./NavBar/LPNav.jsx";
import Hero from './Hero/Hero.jsx';
import About from "./About/About.jsx";
import Partner from "./Partner/Partner.jsx"
import Footer from "./Footer/Footer.jsx";
import Divider from '@mui/material/Divider';
import "./Lms.css"

export default function Lms() {
  return (
    <>
      <LPNav />
      <Hero />
      <Divider variant="middle" />
      <About />
      <Divider variant="middle" />
      <Partner />
      <Footer />
    </>

  );
}