import React from 'react';
import ArticleFilter from '../ArticleFilter/ArticleFilter';
import './Technology.css';
function Technology({ articles }){
    return (
      <div className='div-technology'>
        
        <ArticleFilter articles={articles} category="Technology" />
      </div>
    );
  };

export default Technology