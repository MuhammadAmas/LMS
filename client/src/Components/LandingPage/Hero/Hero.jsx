import React from "react";
import { Link } from 'react-router-dom';
import './Hero.css';
import HeroPic from "/Assets/Hero.png"

export default function Hero() {
    return (
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
                <img src={HeroPic} alt="Welcome" className="hero-image" />
            </div>
        </div>
    );
}

