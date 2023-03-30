import React from "react";
import { Link } from 'react-router-dom';
import LPNav from "./NavBar/LPNav.jsx";
import Divider from '@mui/material/Divider';

import Hero from "/Assets/Hero.png"
import "./Lms.css"
import Footer from "./Footer/Footer.jsx";

export default function Lms() {
  return (
    <main>
      <LPNav />

      <div className="hero-container">
        <div className="hero-wrapper">
          <h1 className="hero-text">Welcome to Acadist</h1>
          <span className="hero-tag">
            Expand your knowledge with our digital learning platform
          </span>
          <div className="buttons">
            <Link to="/signin" className="login">
              <button className="btn1">
                Start Learning !
              </button>
            </Link>
            <Link to="/signup" className="signup">
              <button className="btn2">
                Register for free
              </button>
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={Hero} alt="Welcome" className="hero-image" />
        </div>
      </div>
      <Divider variant="middle" />
      <div className="what-container">
        <h2 className="what-text">What is Acadist?</h2>
        <ul className="list">
          <li>Online platform for learning and teaching.</li>
          <li>Offers courses on various subjects and topics.</li>
          <li>Taught by experienced educators from around the world.</li>
          <li>Accessible anytime, anywhere with an internet connection.</li>
          <li>Tools for instructors to create and manage courses.</li>
          <li>Start your journey to lifelong learning with Acadist.</li>
        </ul>
      </div>
      <Divider variant="middle" />
      <div className="partner-container">
        <h2>Partners</h2>
      </div>
      <Footer/>
    </main>
  );
}