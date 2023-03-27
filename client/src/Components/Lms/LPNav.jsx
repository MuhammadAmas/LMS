import React from "react"
import { Link } from "react-router-dom"
import "./LPNav.css"


export default function LPNav() {
    return (
        <nav className="nav">
            <h1 className="nav-title">Acadist</h1>
            <div className="btns">
                <Link to="/signin" className="login">
                    <button className="button">
                        Sign In
                    </button>
                </Link>
                <Link to="/signup" className="signup">
                    <button className="button">
                        Sign Up
                    </button>
                </Link>

            </div>
        </nav>
    )

}