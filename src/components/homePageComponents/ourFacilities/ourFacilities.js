// REACT-IMPORTS.
import React from 'react';

// LOCAL-FILES-IMPORTS.
import FacilitiesCard from './subComponents/facilitiesCard/facilitiesCard';

// CSS-IMPORTS.
import './ourFacilities.css';

// IMAGE-IMPORTS.
import libararyImg from '../../../assets/universityWebsiteAssets/library.png';
import basketballImg from '../../../assets/universityWebsiteAssets/basketball.png';
import cafeteriaImg from '../../../assets/universityWebsiteAssets/cafeteria.png';


// CONSTANTS-DECLARATION.
let facilitiesCardData = [
    {
        img : libararyImg,
        title: 'World Class Library',
        subTitle: "library with full of knowledge"
    },
    {
        img : basketballImg,
        title: 'Largest Play Ground',
        subTitle: "Sports is fitness"
    },
    {
        img : cafeteriaImg,
        title: 'Tasty and Healthy Food',
        subTitle: "Here health and taste comes first"
    }
]

export default function OurFacilities() {
    return (
        <div>
            <h1 className='facilities-main-title'>Our Facilities</h1>
            <p className='facilities-main-sub-title'>We provide the best facilities.</p>
            <section className='facilities-show-card-main-container'>
                {facilitiesCardData.map((singleCardData) => <FacilitiesCard facilityCardData={singleCardData} />)}
            </section>
        </div>
    )
}
