import React from "react";
import LPNav from "./NavBar/LPNav.jsx";
import Hero from './Hero/Hero.jsx';
import About from "./About/About.jsx";
import Partner from "./Partner/Partner.jsx"
import Footer from "./Footer/Footer.jsx";
import { Divider } from "@chakra-ui/react";
import "./Lms.css"

export default function Lms() {
  return (
    <div className="lms">
      <LPNav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Partner />
      <Divider />
      <Footer />
    </div>

  );
}