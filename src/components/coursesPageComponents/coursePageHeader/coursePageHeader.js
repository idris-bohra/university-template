// REACT-IMPORTS.
import React from 'react';

// CSS-IMPORTS.
import './coursePageHeader.css';

// LOCAL-FILE-IMPORTS.
import CommonHeader from '../../commonComponents/commonHeader/commonHeader';

export default function CoursePageHeader() {
  return (
    <div className='course-page-header-main-container'>
      <CommonHeader />
      <div className='course-page-header-main-title-container'>
        <h1 className='course-page-header-main-title'>Our Courses</h1>
      </div>
    </div>
  )
}