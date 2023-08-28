// REACT-IMPORTS.
import React from 'react';

// CSS-IMPORTS.
import './blogsPage.css';

// LOCAL-FILE-IMPORTS.
import BlogsPageHeader from '../../components/blogsPageComponents/blogsPageHeader/blogsPageHeader';
import BlogsBodySection from '../../components/blogsPageComponents/blogsBodySection/blogsBodySection';
import LeaveCommentSection from '../../components/blogsPageComponents/leaveCommentSection/leaveCommentSection';
import Footer from '../../components/commonComponents/footer/footer';

export default function BlogsPage() {
  return (
    <React.Fragment>
      <BlogsPageHeader />
      <BlogsBodySection />
      <LeaveCommentSection />
      <Footer />
    </React.Fragment>
  )
}