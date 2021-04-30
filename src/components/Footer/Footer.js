import { faEnvelope, faPhone, faStreetView } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="col-md-5">
                    <div className="contact">
                        <h2>SHOPDROP</h2>
                        <p><FontAwesomeIcon icon={faStreetView}/> Banarupa Bazar, Rangamati, Bangladesh</p>
                        <p><FontAwesomeIcon icon={faEnvelope}/> shopdorp.official@gmail.com</p>
                        <p><FontAwesomeIcon icon={faPhone}/> 01878581794(Available : 09:00am to 11:00pm)</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <ul className="im-link">
                        <li>
                            About
                        </li>
                        <li>
                            Privacy Policy
                        </li>
                        <li>
                            Terns and Condition
                        </li>
                        <li>
                            Refund Policy
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <img src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt=""/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;