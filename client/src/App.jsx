import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Student,
  Teacher,
  Lms,
  // NavBar,
  Profile,
  SignUp,
  SignIn,
} from "./Components";
import "./App.css";

export default function App() {
  return (
    <div className="app">

      <main className="#">
        <div className="#" />
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route exact path="/student/:id" element={<Student />} />
          <Route exact path="/teacher/:id" element={<Teacher />} />
          <Route exact path="/" element={<Lms />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
