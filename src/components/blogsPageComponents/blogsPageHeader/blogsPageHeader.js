// REACT-IMPORTS.
import React from 'react';

// CSS-IMPORTS.
import './blogsPageHeader.css';

// LOCAL-FILE-IMPORTS.
import CommonHeader from '../../commonComponents/commonHeader/commonHeader';

export default function BlogsPageHeader() {
    return (
        <div className='blogs-page-header-main-container'>
            <CommonHeader />
            <div className='blogs-page-header-main-title-container'>
                <h1 className='blogs-page-header-main-title'>Our Certificate and Online Program For 2023</h1>
            </div>
        </div>
    )
}
