import React from 'react'
import './SportsNews.css'
function SportsNews({heading , content}) {
  return (
    <>        
        <div className='article-style-sports'>
        <h3>{heading}</h3>
        <p>{content}</p>
        </div>
    </>
  )
}

export default SportsNews