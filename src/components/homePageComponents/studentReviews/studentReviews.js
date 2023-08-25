// REACT-IMPORTS.
import React from 'react';

// LOCAL-FILES-IMPORTS.
import StudentReviewCard from './studentReviewCard/studentReviewCard';

// CSS-IMPORTS.
import './studentReviews.css';

// IMAGE-IMPORTS.
import harryKaneImg from '../../../assets/universityWebsiteAssets/user2.jpg';
import kareenaKapoorImg from '../../../assets/universityWebsiteAssets/user1.jpg';

// CONSTANTS-DECLARATION.
let studentReviewsCardData = [
    {
        name: "Harry Kane",
        review: "Absolutely delighted with my experience at this institution! The faculty's dedication to nurturing critical thinking is evident, and the range of extracurricular activities ensured a holistic development. The campus is a vibrant hub of diversity, where I forged lifelong friendships.",
        img: harryKaneImg,
        rating: 4,
    },
    {
        name: "Dua Lipa",
        review: "My time at this university has been a remarkable journey of academic and personal growth. The professors' expertise and their willingness to engage in meaningful discussions have been pivotal in shaping my perspectives.",
        img: kareenaKapoorImg,
        rating: 5,
    },
]

export default function StudentReviews() {
    return (
        <div>
            <h1 className='student-reviews-title'>What Our Student Says</h1>
            <p className='student-reviews-sub-title'>Students have all the belief in us</p>
            <section className='student-reviews-show-card-main-container'>
                {studentReviewsCardData.map((singleCardData) => <StudentReviewCard singleStudentReviewCardData={singleCardData} />)}
            </section>
        </div>
    )
}