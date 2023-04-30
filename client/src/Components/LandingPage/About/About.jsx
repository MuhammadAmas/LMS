import React from "react";
// import "./About.css";

export default function About() {
    return (
        <div className="what-container"
            style={{
                width: "75%",
                textAlign: "justify",
                margin: "auto",
                fontSize: "1.2rem",
                // padding: "2rem 0",
                // display: 'flex',
                // flexDirection: 'column',
                // gap: "1.5rem",
            }}
        >
            <h2 className="what-text"
                style={{
                    textDecoration: "underline var(--darkBlue) 10px",
                    textDecorationSkipInk: "none",
                    textUnderlineOffset: "-6px"
                }}
            >About</h2>
            <p>
                We came up with this idea to provide hustle free education at your doorsteps. Providing the best quality of tutors is our aim because teachers are the makers of the future. They don't teach to a single student instead they are teaching the upcoming generations. We are continuing our legacy and providing tutors to learners. We made the registration process for tutors very easy by Getting yourself registered on your smartphone or personal computer to teach the upcoming generations.
            </p>
        </div >
    );
}