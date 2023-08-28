// REACT-IMPORTS.
import React from 'react';

// CSS-IMPORTS.
import './contactUsHeader.css'

// LOCAL-FILE-IMPORTS.
import CommonHeader from '../../commonComponents/commonHeader/commonHeader';

export default function ContactUsHeader() {
    return (
        <div className='contact-us-header-main-container'>
            <CommonHeader />
            <div className='contact-us-header-main-title-container'>
                <h1 className='contact-us-header-main-title'>Contact Us</h1>
            </div>
        </div>
    )
}
