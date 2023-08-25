// REACT-IMPORTS.
import React from 'react';

// CSS-IMPORTS.
import './coursesCard.css';

export default function CoursesCard(props) {
  return (
    <div className='courses-card-main-container'>
      <h3>{props?.cardData?.level}</h3>
      <p>{props?.cardData?.description}</p>
    </div>
  )
}
