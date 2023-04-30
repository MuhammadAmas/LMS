import React from "react";
import LPNav from "./NavBar/LPNav.jsx";
import Hero from './Hero/Hero.jsx';
import About from "./About/About.jsx";
import Partner from "./Partner/Partner.jsx"
import Footer from "./Footer/Footer.jsx";
import { Divider } from "@chakra-ui/react";
import "./Lms.css"
import Testimonials from "./Testimonial/Testimonials.jsx";
import ContactForm from "./Contact/ContactForm.jsx";

export default function Lms() {
  return (
    <div className="lms">
      <LPNav />
      <div
        style={{
          marginTop: "10em",
        }}>
        <Hero />
      </div>
      {/* <Divider /> */}
      <About />
      {/* <Divider /> */}
      <Testimonials />
      {/* <Divider /> */}
      {/* <Partner /> */}
      {/* <Divider /> */}
      <ContactForm/>
      <Footer />
    </div>
  );
}