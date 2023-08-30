// REACT-IMPORTS.
import React, { useRef } from 'react';

// REACT-ROUTER-DOM-IMPORTS.
import { useNavigate } from 'react-router-dom';

// IMAGE-IMPORTS.
import closeIcon from '../../../../../assets/universityWebsiteAssets/close-icon.png';

// CSS-IMPORTS.
import './navbar.css';

// LOCAL-FILE-IMPORTS.
import ROUTES from '../../../../../constants/routes';

export default function Navbar() {

  // USE-REF.
  const navbarRef = useRef();
  const hamburgerContainerRef = useRef();

  // USE-NAVIGATE.
  const navigate = useNavigate();

  // HANDLER-FUNCTIONS.
  const openCloseNavbarForSmallScreen = () => {
    if (navbarRef.current.classList.contains('navbar-main-contianer-slider-show')) {
      navbarRef.current.classList.remove('navbar-main-contianer-slider-show');
      return;
    }
    navbarRef.current.classList.add('navbar-main-contianer-slider-show');
  }

  const handleOnLinksClick = (e) => {
    let pathToNavigate = e.target.getAttribute('link-attribute');
    navigate(pathToNavigate);
  }

  return (
    <React.Fragment>
      <div ref={navbarRef} className='navbar-main-contianer navbar-main-contianer-slider'>
        <img className='close-icon' src={closeIcon} alt="This is close-icon" onClick={openCloseNavbarForSmallScreen} />
        <li className='navbar-links' link-attribute={ROUTES.HOME} onClick={handleOnLinksClick}>Home</li>
        <li className='navbar-links' link-attribute={ROUTES.ABOUTUS} onClick={handleOnLinksClick}>About Us</li>
        <li className='navbar-links' link-attribute={ROUTES.COURSES} onClick={handleOnLinksClick}>Courses</li>
        <li className='navbar-links' link-attribute={ROUTES.BLOGS} onClick={handleOnLinksClick}>Blogs</li>
        <li className='navbar-links' link-attribute={ROUTES.CONTACTUS} onClick={handleOnLinksClick}>Contact Us</li>
      </div>
      <div ref={hamburgerContainerRef} className='hamburger-main-container' onClick={openCloseNavbarForSmallScreen}>
        <span className='hamburger-line hamburger-line1'></span>
        <span className='hamburger-line hamburger-line2'></span>
        <span className='hamburger-line hamburger-line3'></span>
      </div>
    </React.Fragment>
  )
}
