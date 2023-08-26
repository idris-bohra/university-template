// REACT-IMPORTS.
import React from 'react';

// ICON-IMPORTS.
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsSuitHeart } from "react-icons/bs";

// CSS-IMPORTS.
import './footer.css';

export default function Footer() {
  return (
    <div className='footer-main-container'>
      <h3 className='footer-main-title'>About Us</h3>
      <p>Welcome to University, where academic excellence meets transformative innovation. Join us in our journey of <br /> fostering knowledge, creativity, and leadership.</p>
      <section className='footer-icon-main-container'>
        <CgFacebook className='footer-icon footer-icon-facebook' />
        <FaLinkedinIn className='footer-icon footer-icon-linkedin' />
        <FaInstagram className='footer-icon footer-icon-instagram' />
        <FaTwitter className='footer-icon footer-icon-twitter' />
      </section>
      <p className='footer-end-title'>Made with <BsSuitHeart className='footer-icon-heart' /> by Idris Bohra.</p>
    </div>
  )
}
