// REACT-IMPORTS.
import React from 'react';

// REACT-ROUTER-DOM-IMPORTS.
import { useNavigate } from 'react-router-dom';

// CSS-IMPORTS.
import './contactUsSection.css';

export default function ContactUsSection() {

    // USE-NAVIGATE.
    const navigate = useNavigate();

    // HANDLER-FUNCTIONS.
    const handleContactUsbtnClick = () => {
        navigate(process.env.REACT_APP_CONTACTUS_PATH);
    }

    return (
        <div className='contactUs-section-main-container'>
            <div className='contactUs-section-image-container'>
                <div className='contactUs-section-banner-title-container'>
                    <h1 className='contactUs-section-banner-title'>Enroll For Our Various Online Courses AnyWhere From the World, The world believe is us</h1>
                    <button onClick={handleContactUsbtnClick} className='global-contact-us-btn'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}