import React from 'react';
import './Partner.css';
import twitter from '/Assets/twitter.png'
import apple from '/Assets/apple.png'
import google from '/Assets/google.png'
import facebook from '/Assets/facebook.png'

export default function Partner() {
    return (
        <div className="partner-container">
            <h2 className='partner-text'>Our Partners</h2>
            <div className="partner-icons">
                <div>
                    <img src={twitter} alt="Twitter" />
                    <a href='/'><h4>Twitter</h4></a>
                </div>
                <div>
                    <img src={facebook} alt="Facebook" />
                    <a href='/'><h4>Facebook</h4></a>
                </div>
                <div>
                    <img src={apple} alt="Apple" />
                    <a href='/'><h4>Apple</h4></a>
                </div>
                <div>
                    <img src={google} alt="Google" />
                    <a href='/'> <h4>Google</h4></a>
                </div>
            </div>
        </div>
    );
}
