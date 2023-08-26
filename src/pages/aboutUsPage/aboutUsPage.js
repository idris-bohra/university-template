// REACT-IMPORTS.
import React from 'react';

// LOCAL-FILE-IMPORTS.
import AboutUsHeader from '../../components/aboutUsPageComponents/aboutUsHeader/aboutUsHeader';
import AboutUsSection from '../../components/aboutUsPageComponents/aboutUsSection/aboutUsSection';
import Footer from '../../components/commonComponents/footer/footer';

export default function AboutUsPage() {
  return (
    <React.Fragment>
      <AboutUsHeader />
      <AboutUsSection />
      <Footer />
    </React.Fragment>
  )
}