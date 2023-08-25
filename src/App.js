// REACT-IMPORTS.
import React from 'react';

// REACT-ROUTER-DOM-IMPORTS.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// CSS-IMPORTS.
import './App.css';

// LOCAL-FILE-IMPORTS.
import HomePage from './pages/homePage/homePage';
import AboutUsPage from './pages/aboutUsPage/aboutUsPage';
import CoursePage from './pages/coursePage/coursePage';
import BlogsPage from './pages/blogsPage/blogsPage';
import ContactUsPage from './pages/contactUsPage/contactUsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={process.env.REACT_APP_CONTACTUS_PATH} element={<ContactUsPage />} />
        <Route exact path={process.env.REACT_APP_BLOGS_PATH} element={<BlogsPage />} />
        <Route exact path={process.env.REACT_APP_COURSES_PATH} element={<CoursePage />} />
        <Route exact path={process.env.REACT_APP_ABOUTUS_PATH} element={<AboutUsPage />} />
        <Route exact path={process.env.REACT_APP_HOME_PATH} element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;