import React from "react";
import { Link } from 'react-router-dom';
import LPNav from "../Lms/LPNav.jsx";
import Divider from '@mui/material/Divider';

import Hero from "/Assets/Hero.png"
import "./Lms.css"

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
      <div>
        <h2>What is Acadist?</h2>
      </div>
    </main>
  );
}