// REACT-IMPORTS.
import React from 'react';

// CSS-IMPORTS.
import './aboutUsSection.css';

// REACT-ROUTER-DOM-IMPORTS.
import { useNavigate } from 'react-router-dom';

// IMAGE-IMPORTS.
import aboutUsSectionImage from '../../../assets/universityWebsiteAssets/about.jpg';

export default function AboutUsSection() {

    // USE-NAVIGATE.
    const navigate = useNavigate();

    // HANDLER-FUNCTIONS.
    const handleContactUsbtnClick = () => {
        navigate(process.env.REACT_APP_CONTACTUS_PATH);
    }

    return (
        <div className='about-us-section-main-container'>
            <div className='about-us-section-text-container'>
                <h1 className='about-us-section-title'>We are the world's largest <br /> University</h1>
                <div className='about-us-section-description'>
                    <p>Welcome to dream university, where knowledge meets innovation and dreams take flight. As a premier institution of higher learning, we are committed to nurturing intellectual curiosity, fostering creativity, and empowering the next generation of leaders</p>
                </div>
                <button onClick={handleContactUsbtnClick} className='global-contact-us-btn'>Contact Us</button>
            </div>
            <img className='about-us-section-about-image' src={aboutUsSectionImage} alt="This is an image" />
        </div>
    )
}
