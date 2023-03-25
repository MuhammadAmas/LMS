import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import {
  Student,
  Teacher,
  Lms,
  NavBar,
  Profile,
  SignUp,
  LogIn,
} from "./Components";
import "./App.css";
// import { SignUp } from './Components/SignUp/SignUp';

export default function App() {
  return (
    <div className="#">
      <CssBaseline />
      <NavBar />

      <LogIn />
      <main className="#">
        <div className="#" />
        <Routes>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route exact path="/student/:id" element={<Student />} />
          <Route exact path="/teacher/:id" element={<Teacher />} />
          <Route exact path="/" element={<Lms />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
