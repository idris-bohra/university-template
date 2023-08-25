// REACT-IMPORTS.
import React from 'react';

// CSS-IMPORTS.
import './homeHeader.css';

// LOCAL-FILE-IMPORTS.
import CommonHeader from '../../commonComponents/commonHeader/commonHeader';

export default function HomeHeader() {
  return (
    <div className='homeHeader-main-container'>
      <CommonHeader />
      <section className='homeheader-title-container'>
        <h1 className='homeheader-title-main-title'>World's Biggest University</h1>
        <p className='homeheader-title-para'>We fulfill the dreams of ones who see dreams on daylight.</p>
        <button className='homeheader-title-button'>Visit us to know more</button>
      </section>
    </div>
  )
}
