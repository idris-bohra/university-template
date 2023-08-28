// REACT-IMPORTS.
import React from 'react';

// CSS-IMPORTS.
import './contactUsMap.css';

export default function ContactUsMap() {
    return (
        <div className='contact-us-map-main-container'>
            <iframe
                className='contact-us-map-iframe'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5146977092563!2d75.93220677437499!3d22.746272626584393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3cd9d3de1ad%3A0xebaf3ee69f583ff5!2sPhoenix%20Citadel%20Mall!5e0!3m2!1sen!2sin!4v1693242134020!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}
