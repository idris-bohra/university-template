// REACT-IMPORTS.
import React from 'react';

// CSS-IMPORTS.
import './contactUsFooter.css';

// ICON-IMPORTS.
import { FaHome } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { RxEnvelopeClosed } from 'react-icons/rx';

// CONSTANTS-DECLARAION.
let contactDetailsData = [
    {
        icon: <FaHome className='contact-us-footer-icon' />,
        details: 'XYZ Raod, ABC Building',
        subDetails: 'Banglore, Karnataka, IN',
    },
    {
        icon: <FaPhoneAlt className='contact-us-footer-icon' />,
        details: '+91 1234567890',
        subDetails: 'Monday to Saturday 10AM to 6PM',
    },
    {
        icon: <RxEnvelopeClosed className='contact-us-footer-icon' />,
        details: 'username@gmail.com',
        subDetails: 'Email us your query',
    },
]

// SUB-COMPONENT-DECLARATION.
function ContanctDetails(props) {
    return (
        <div className='contact-us-footer-contact-details-container'>
            {props?.icon}
            <div className='contact-us-footer-contact-details'>
                <h4 className='contact-us-footer-contact-details-title'>{props?.details}</h4>
                <p className='contact-us-footer-contact-details-sub-title'>{props?.subDetails}</p>
            </div>
        </div>
    )
}

export default function ContactUsFooter() {
    return (
        <div className='contact-us-footer-main-container'>
            <div className='contact-us-footer-contact-details-main-container'>
                {contactDetailsData.map((singleData) => <ContanctDetails icon={singleData.icon} details={singleData.details} subDetails={singleData.subDetails} />)}
            </div>
            <div className='contact-us-footer-input-main-container'>
                <input placeholder='Enter your name' className='contact-us-footer-input-filed' />
                <input placeholder='Enter email address' className='contact-us-footer-input-filed' />
                <input placeholder='Enter your subject' className='contact-us-footer-input-filed' />
                <textarea placeholder='Message' className='contact-us-footer-input-filed-textarea' />
                <button className='contact-us-footer-send-message-btn'>Send Message</button>
            </div>
        </div>
    )
}
