// REACT-IMPORTS.
import React from 'react';

// CSS-IMPORTS.
import './homePage.css';

// LOCAL-FILES-IMPORTS.
import HomeHeader from '../../components/homePageComponents/homeHeader/homeHeader';
import Courses from '../../components/homePageComponents/courses/courses';
import Campus from '../../components/homePageComponents/campus/campus';
import OurFacilities from '../../components/homePageComponents/ourFacilities/ourFacilities';
import StudentReviews from '../../components/homePageComponents/studentReviews/studentReviews';
import ContactUsSection from '../../components/homePageComponents/contactUsSection/contactUsSection';
import Footer from '../../components/commonComponents/footer/footer';

export default function HomePage() {
    return (
        <React.Fragment>
            <HomeHeader />
            <Courses />
            <Campus />
            <OurFacilities />
            <StudentReviews />
            <ContactUsSection />
            <Footer />
        </React.Fragment>
    )
}
