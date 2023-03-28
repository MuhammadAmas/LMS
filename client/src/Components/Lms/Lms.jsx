import React from "react";
import "./LMS.css";
import LPNav from "./LPNav.jsx";
import Welcome from "/Assets/Welcome.png"

export default function Lms() {
  return <>
    <LPNav />

    <div className="Welcome-container">
      <div>
        <h1>Welcome to Acadist</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. deserunt
          officiis ipsum
        </p>
      </div>
      <div className="welcome">
        <img src={Welcome} alt="Welcome" />
      </div>
    </div>
    <hr />
    <div>
      <h2>What is Acadist?</h2>
    </div>
  </>;
}
