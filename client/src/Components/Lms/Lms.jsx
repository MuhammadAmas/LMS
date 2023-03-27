import React, { useEffect, useState } from "react";
import LPNav from "./LPNav.jsx";

export default function Lms() {
  return (
    <main>
      <LPNav />

      <div className="wlc">
        <h1>Welcome to Acadoom</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. deserunt
          officiis ipsum
        </p>
      </div>
      <hr />
      <div>
        <h2>What is Acadoom?</h2>
      </div>
    </main>
  );
}
