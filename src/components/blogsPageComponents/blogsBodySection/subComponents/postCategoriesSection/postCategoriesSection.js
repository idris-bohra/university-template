// REACT-IMPORTS.
import React from 'react';

// CSS-IMPORTS.
import './postCategoriesSection.css';

// CONSTANTS-DECLARATION.
let categoriesData = [
  { name: "Business Analytics", count: 21 },
  { name: "Data Science", count: 28 },
  { name: "Machine Learning", count: 24 },
  { name: "Computer Science", count: 34 },
  { name: "AutoCAD", count: 42 },
  { name: "Journalism", count: 22 },
]

// SUB-COMPONENT-DECLARATION.
function SingleCategoryData(props) {
  return (
    <div className='post-categories-section-single-catogory-container'>
      <p>{props?.singleCategoryData?.name}</p>
      <p>{props?.singleCategoryData?.count}</p>
    </div>
  )
}

export default function PostCategoriesSection() {
  return (
    <div className='post-categories-section-main-container'>
      <div className='post-categories-head-title'>Post Categories</div>
      <div className='post-categories-section-categories'>
        {categoriesData.map((singleCategoryData) => <SingleCategoryData singleCategoryData={singleCategoryData} />)}
      </div>
    </div>
  )
}