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
import { useState, useEffect } from "react";
import userSignin from "./utils/userSigninAPI";

export default function App() {

  const [emailHistory, setEmailHistory] = useState(localStorage.getItem("email"))
  const [passwordHistory, setPasswordHistory] = useState(localStorage.getItem("password"));
  const [typeHistory, setTypeHistory] = useState(localStorage.getItem("type"));

  return (
    <div className="app">

      <main className="#">
        <div className="#" />
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn
            emailHistory={emailHistory}
            passwordHistory={passwordHistory}
            typeHistory={typeHistory}
          />} />
          <Route exact path="/student/:id" element={<Student />} />
          <Route exact path="/teacher/:id" element={<Teacher />} />
          <Route exact path="/" element={<Lms />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
