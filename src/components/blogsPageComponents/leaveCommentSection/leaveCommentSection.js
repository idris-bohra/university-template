// REACT-IMPORTS.
import React from 'react';

// CSS-IMPORTS.
import './leaveCommentSection.css';

export default function LeaveCommentSection() {
    return (
        <div className='leave-comment-section-main-container'>
            <div className='leave-comment-section-input-container'>
                <h3 className='leave-comment-section-title'>Leave Comment</h3>
                <input className='leave-comment-section-input-field' placeholder='Name' />
                <input className='leave-comment-section-input-field' placeholder='Email' />
                <textarea className='leave-comment-section-textarea' placeholder='Your Comment' />
                <button className='leave-comment-section-button'>Post Comment</button>
            </div>
        </div>
    )
}
