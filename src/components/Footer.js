import React from 'react';
import whitelogo from '../assets/logo_white.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import Nav from './Nav';

function Footer() {
  return (
    <footer>
      <div className='content'>
        <div className="footer-logo"><img src={whitelogo} alt="Litle Lemon Logo" /></div>
        <div><Nav classNav='doormat' /></div>
        <div>
          <ul><li><h3>Contact</h3></li>
            <li>7344 N Western Ave,</li>
            <li>Chicago, IL 60611</li>
            <li>Phone: 312-321-3210</li>
          </ul>
        </div>
        <div>
          <ul><li><h3>Opening hours</h3></li>
            <li>Tue - Fr: 3 p.m. - 11 p.m.</li>
            <li>Sat, Sun: 10 a.m. - 12 a.m.</li>
            <li>Mon: Closed</li>
            <li></li></ul>
        </div>
      </div>
      <div className="socials"><ul>
        <li><FaFacebook className='footer-icon' /></li>
        <li><FaInstagram className='footer-icon' /></li>
        <li><FaPinterest className='footer-icon' /></li>
        <li><FaYoutube className='footer-icon' /></li>
      </ul></div>
    </footer>
  )
}

export default Footer