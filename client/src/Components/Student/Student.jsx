import React from 'react';
import BackgroundAnimations from '../Background Animations/BackgroundAnimations';
import SignUp from '../SignUp/SignUp';

export default function Student() {

    return (
        <div >
            <BackgroundAnimations />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0}}>
                <SignUp />
            </div>
        </div>
    );
}
