import React from 'react'
import './TechnologyNews.css'
function TechnologyNews({heading , content}) {
  return (
    <>        
        <div className='article-style'>
        <h3>{heading}</h3>
        <p>{content}</p>
        </div>
    </>
  )
}

export default TechnologyNews