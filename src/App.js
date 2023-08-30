// REACT-IMPORTS.
import React from 'react';

// REACT-ROUTER-DOM-IMPORTS.
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// CSS-IMPORTS.
import './App.css';
import './css/globalCss/global.css';
import './css/resetCss/reset.css';

// LOCAL-FILE-IMPORTS.
import HomePage from './pages/homePage/homePage';
import AboutUsPage from './pages/aboutUsPage/aboutUsPage';
import CoursePage from './pages/coursePage/coursePage';
import BlogsPage from './pages/blogsPage/blogsPage';
import ContactUsPage from './pages/contactUsPage/contactUsPage';
import ROUTES from './constants/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTES.CONTACTUS} element={<ContactUsPage />} />
        <Route exact path={ROUTES.BLOGS} element={<BlogsPage />} />
        <Route exact path={ROUTES.COURSES} element={<CoursePage />} />
        <Route exact path={ROUTES.ABOUTUS} element={<AboutUsPage />} />
        <Route exact path={ROUTES.HOME} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;