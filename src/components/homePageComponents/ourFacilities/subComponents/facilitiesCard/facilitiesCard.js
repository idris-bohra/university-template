// REACT-IMPORTS.
import React from 'react';

// CSS-IMPORTS.
import './facilitiesCard.css';

export default function FacilitiesCard(props) {
    return (
        <div className='facility-card-main-container'>
            <div className='facility-card-image-container'>
                <img className='facility-card-image' src={props.facilityCardData.img} alt="This is an image" />
            </div>
            <h4 className='facility-card-city-title'>{props?.facilityCardData?.title}</h4>
            <p className='facility-card-city-sub-title'>{props?.facilityCardData?.subTitle}</p>
        </div>
    )
}
