// REACT-IMPORTS.
import React from 'react';

// LOCAL-FILE-IMPORTS.
import ContactUsHeader from '../../components/contactUsPageComponents/contactUsHeader/contactUsHeader';
import ContactUsMap from '../../components/contactUsPageComponents/contactUsMap/contactUsMap';
import ContactUsFooter from '../../components/contactUsPageComponents/contactUsFooter/contactUsFooter';

export default function ContactUsPage() {
  return (
    <React.Fragment>
      <ContactUsHeader />
      <ContactUsMap />
      <ContactUsFooter />
    </React.Fragment>
  )
}
