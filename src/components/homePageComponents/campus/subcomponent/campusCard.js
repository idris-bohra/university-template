// REACT-IMPORTS.
import React from 'react';

// CSS-IMPORTS.
import './campusCard.css';

export default function CampusCard(props) {
    return (
        <div className='campus-card-main-container'>
            <div className='campus-card-image-layer-container'>
                <img className='campus-card-image' src={props?.CampusCardImg} alt="This is an image" />
                <div className='campus-card-image-layer'>
                    <p className='campus-card-city-title'>{props?.city}</p>
                </div>
            </div>
        </div>
    )
}