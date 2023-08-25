// REACT-IMPORTS.
import React from 'react'

// ICON-IMPORTS.
import { FaStar } from 'react-icons/fa';

// CSS-IMPORTS.
import './studentReviewCard.css';

export default function StudentReviewCard(props) {
    return (
        <div className='student-review-card-main-container'>
            <div className='student-review-card-image-container'>
                <img className='student-review-card-image' src={props?.singleStudentReviewCardData?.img} alt="This is an image" />
            </div>
            <div className='student-review-card-data-container'>
                <p className='student-review-card-review'>{props?.singleStudentReviewCardData?.review}</p>
                <div className='student-review-card-footer-container'>
                    <h5>{props?.singleStudentReviewCardData?.name}</h5>
                    <div className='student-review-icon-main-container'>
                        {Array.from({ length: props?.singleStudentReviewCardData?.rating }).map(() => <FaStar className='student-review-star-icon' />)}
                    </div>
                </div>
            </div>
        </div>
    )
}
