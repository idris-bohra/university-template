// REACT-IMPORTS.
import React from 'react';

// LOCAL-IMPORTS.
import Navbar from '../navbar/navbar';

// IMAGE-IMPORTS.
import logo from '../../../assets/universityWebsiteAssets/logo.png';

// CSS-IMPORTS.
import './homeHeader.css';

export default function HomeHeader() {
  return (
    <div className='homeHeader-main-container'>
      <section className='homeHeader-logo-and-navbar-container'>
        <img className='logo-img' src={logo} alt="" />
        <Navbar />
      </section>
      <section className='homeheader-title-container'>
        <h1 className='homeheader-title-main-title'>World's Biggest University</h1>
        <p className='homeheader-title-para'>We fulfill the dreams of ones who see dreams on daylight.</p>
        <button className='homeheader-title-button'>Visit us to know more</button>
      </section>
    </div>
  )
}
