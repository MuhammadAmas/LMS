import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";

export default function Lms() {
  return (
    <main>
      <NavBar />
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
