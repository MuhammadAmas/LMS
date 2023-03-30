import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGoogle, faAmazon, faApple } from '@fortawesome/free-brands-svg-icons';
import './Partner.css';

export default function Partner() {
    return (
        <div className="partner-container">
            <h2 className='partner-text'>Our Partners</h2>
            <div className="partner-icons">
                <div className="font">
                    <a href="/" target={"_blank"}>
                        <FontAwesomeIcon icon={faAmazon} size="lg" />
                    </a>

                    <a href="/" target={"_blank"}>
                        <FontAwesomeIcon icon={faGoogle} size="lg" />
                    </a>
                    <a href="/" target={"_blank"}>
                        <FontAwesomeIcon icon={faApple} size="lg" />
                    </a>
                    <a href="/" target={"_blank"}>
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                </div>
            </div>
        </div>
    );
}
