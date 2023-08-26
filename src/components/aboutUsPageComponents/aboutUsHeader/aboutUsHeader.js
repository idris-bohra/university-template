// REACT-IMPORTS.
import React from 'react';

// CSS-IMPORTS.
import './aboutUsHeader.css';

// LOCAL-FILE-IMPORTS.
import CommonHeader from '../../commonComponents/commonHeader/commonHeader';

export default function AboutUsHeader() {
    return (
        <div className='about-us-header-main-container'>
            <CommonHeader />
            <div className='about-us-header-main-title-container'>
                <h1 className='about-us-header-main-title'>About Us</h1>
            </div>
        </div>
    )
}
