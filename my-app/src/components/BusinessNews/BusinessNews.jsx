import React from 'react'

function BusinessNews({heading, content}) {
  return (   
        <div className='article-style'>
        <h3>{heading}</h3>
        <p>{content}</p>
        </div>    
  )
}

export default BusinessNews