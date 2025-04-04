import React from 'react';
import ArticleFilter from '../ArticleFilter/ArticleFilter';
import './Business.css'
function Business({ articles }){
    return (
      <>
        
        <div className='div-business'>        
          <ArticleFilter articles={articles} category="Business" />
        </div>
      </>
    );
  };

export default Business