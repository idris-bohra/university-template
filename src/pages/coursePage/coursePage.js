// REACT-IMPORTS.
import React from 'react';

// CSS-IMPORTS.
import './coursePage.css';

// LOCAL-FILE-IMPORTS.
import CoursePageHeader from '../../components/coursesPageComponents/coursePageHeader/coursePageHeader';
import Courses from '../../components/homePageComponents/courses/courses';
import OurFacilities from '../../components/homePageComponents/ourFacilities/ourFacilities';
import Footer from '../../components/commonComponents/footer/footer';

export default function CoursePage() {
    return (
        <React.Fragment>
            <CoursePageHeader />
            <Courses />
            <OurFacilities />
            <Footer />
        </React.Fragment>
    )
}