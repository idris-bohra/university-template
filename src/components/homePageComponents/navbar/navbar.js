// REACT-IMPORTS.
import React, { useRef } from 'react';

// IMAGE-IMPORTS.
import closeIcon from '../../../assets/universityWebsiteAssets/close-icon.png';

// CSS-IMPORTS.
import './navbar.css';

export default function Navbar() {

  // USE-REF.
  const navbarRef = useRef();
  const hamburgerContainerRef = useRef();

  // HANDLER-FUNCTIONS.
  const openCloseNavbarForSmallScreen = () => {
    if (navbarRef.current.classList.contains('navbar-main-contianer-slider-show')) {
      navbarRef.current.classList.remove('navbar-main-contianer-slider-show');
      return;
    }
    navbarRef.current.classList.add('navbar-main-contianer-slider-show');
  }

  return (
    <React.Fragment>
      <div ref={navbarRef} className='navbar-main-contianer navbar-main-contianer-slider'>
        <img className='close-icon' src={closeIcon} alt="This is close-icon" onClick={openCloseNavbarForSmallScreen} />
        <li className='navbar-links'>Home</li>
        <li className='navbar-links'>About</li>
        <li className='navbar-links'>Course</li>
        <li className='navbar-links'>Blog</li>
        <li className='navbar-links'>Contact</li>
      </div>
      <div ref={hamburgerContainerRef} className='hamburger-main-container' onClick={openCloseNavbarForSmallScreen}>
        <span className='hamburger-line hamburger-line1'></span>
        <span className='hamburger-line hamburger-line2'></span>
        <span className='hamburger-line hamburger-line3'></span>
      </div>
    </React.Fragment>
  )
}
