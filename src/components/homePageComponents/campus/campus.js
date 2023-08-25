// REACT-IMPORTS.
import React from 'react';

// LOCAL-IMPORTS.
import CampusCard from './subcomponent/campusCard';

// CSS-IMPORTS.
import './campus.css';

// IMAGE-IMPORTS.
import londonImg from '../../../assets/universityWebsiteAssets/london.png';
import newyorkImg from '../../../assets/universityWebsiteAssets/newyork.png';
import washington from '../../../assets/universityWebsiteAssets/washington.png';

// CONSTANTS-DECLARATION.
const campusCardArr = [{ img: londonImg, city: 'LONDON' }, { img: newyorkImg, city: "NEWYORK" }, { img: washington, city: "WASHINGTON" }];

export default function Campus() {
    return (
        <div className='campus-main-container'>
            <h1 className='campus-title'>Our Global Campus</h1>
            <p className='campus-sub-title'>Our service are being provided in many cities.</p>
            <section className='campus-show-card-main-container'>
                {campusCardArr.map((cardData) => <CampusCard CampusCardImg={cardData.img} city={cardData.city} />)}
            </section>
        </div>
    )
}