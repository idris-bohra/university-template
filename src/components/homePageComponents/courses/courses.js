// REACT-IMPORTS.
import React from 'react';

// LOCAL-FILE-IMPORTS.
import CoursesCard from './subComponents/coursesCard/coursesCard';

// CSS-IMPORTS.
import './courses.css';

// CONSTANTS-DECLARATION.
const coursesCardData = [
    {
        level: "Intermediate",
        description: "hello idris how are you I am fine how are you I am fine hello idris how are you I am fine how are you I am finehello idris how are you I am fine how are you I am finehello idris how are you I am fine how are you I am finehello idris how are you I am fine how are you I am fine"
    },
    {
        level: "Graduate",
        description: "hello idris how are you I am fine how are you I am fine hello idris how are you I am fine how are you I am finehello idris how are you I am fine how are you I am finehello idris how are you I am fine how are you I am finehello idris how are you I am fine how are you I am fine"
    },
    {
        level: "Post-Graduate",
        description: "hello idris how are you I am fine how are you I am fine hello idris how are you I am fine how are you I am finehello idris how are you I am fine how are you I am finehello idris how are you I am fine how are you I am finehello idris how are you I am fine how are you I am fine"
    },
]

export default function Courses() {
    return (
        <div className='courses-main-container'>
            <h1 className='courses-title'>Courses We Offer</h1>
            <p className='courses-sub-title'>We provide the best Offer to best students.</p>
            <section className='courses-show-card-container'>
                {coursesCardData.map((cardData, cardIndex) => <CoursesCard key={cardIndex} cardData={cardData} />)}
            </section>
        </div>
    )
}
