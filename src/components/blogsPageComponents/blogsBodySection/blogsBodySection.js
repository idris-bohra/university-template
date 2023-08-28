// REACT-IMPORTS.
import React from 'react';

// CSS-IMPORTS.
import './blogsBodySection.css';

// LOCAL-FILE-IMPORTS.
import BlogPoster from './subComponents/blogPoster/blogPoster';
import PostCategoriesSection from './subComponents/postCategoriesSection/postCategoriesSection';

export default function BlogsBodySection() {
  return (
    <div className='blogs-body-main-container'>
      <BlogPoster />
      <PostCategoriesSection />
    </div>
  )
}
