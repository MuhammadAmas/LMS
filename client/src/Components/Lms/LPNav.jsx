import React from "react"
import { Link } from "react-router-dom"
import "./LPNav.css"

export default function LPNav() {
    return (
        <nav className="nav">
            <h1 className="nav-title">Acadoom</h1>
            <div className="btns">
                <Link to="/login" className="login">
                    <button>Sign In</button>
                </Link>
                <Link to="/signup" className="signup">
                    <button>Sign Up</button>
                </Link>

            </div>
        </nav>
    )

}