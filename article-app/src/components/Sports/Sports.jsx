import React from 'react';
import ArticleFilter from '../ArticleFilter/ArticleFilter';
import './Sports.css';
function Sports({ articles }) {
    return (
      <div className='div-sports'>
        
        <ArticleFilter articles={articles} category="Sports" />
      </div>
    );
  };

export default Sports