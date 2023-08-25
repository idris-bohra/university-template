// REACT-IMPORTS.
import React from 'react'

// CSS-IMPORTS.
import './commonHeader.css';

// IMAGE-IMPORTS.
import logo from '../../../assets/universityWebsiteAssets/logo.png';

// LOCAL-FILE-IMPORTS.
import Navbar from './subComponents/navbar/navbar';

export default function CommonHeader() {
    return (
        <div className='commonHeader-logo-and-navbar-container'>
            <img className='logo-img' src={logo} alt="" />
            <Navbar />
        </div>
    )
}
