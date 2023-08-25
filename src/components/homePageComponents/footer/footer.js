// REACT-IMPORTS.
import React from 'react';

// ICON-IMPORTS.
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsSuitHeart } from "react-icons/bs";

// CSS-IMPORTS.
import './footer.css';

export default function Footer() {
  return (
    <div className='footer-main-container'>
      <h3 className='footer-main-title'>About Us</h3>
      <p>Welcome to University, where academic excellence meets transformative innovation.<br /> Join us in our journey of fostering knowledge, creativity, and leadership.</p>
      <section className='footer-icon-main-container'>
        <FaFacebookF className='footer-icon footer-icon-facebook' />
        <FaLinkedinIn className='footer-icon footer-icon-linkedin' />
        <AiOutlineInstagram className='footer-icon footer-icon-instagram' />
        <FaTwitter className='footer-icon footer-icon-twitter' />
      </section>
      <p className='footer-end-title'>Made with <BsSuitHeart className='footer-icon-heart' /> by Idris Bohra.</p>
    </div>
  )
}
