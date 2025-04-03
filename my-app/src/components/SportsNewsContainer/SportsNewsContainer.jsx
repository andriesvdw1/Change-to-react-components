import React from 'react'
import './SportsNewsContainer.css'
import SportsNews from '../SportsNews/SportsNews'
function SportsNewsContainer({heading,content}) {
  return (
    <>
    <h1>Sports</h1>
    <div className='sports-news-container'>
        <SportsNews heading="Champions League Finals Results" content="The Champions League final concluded with a thrilling penalty shootout. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut magna a felis ultrices convallis. Suspendisse euismod faucibus est, eget fermentum ex ultricies in. Proin sit amet ligula vitae turpis rhoncus dignissim nec sed augue. Integer convallis tellus id finibus tincidunt. Aliquam erat volutpat. Maecenas at orci magna. Vivamus blandit enim vel velit suscipit porta. Integer cursus facilisis facilisis. In hac habitasse platea dictumst."/>
    </div>
    </>
  )
}

export default SportsNewsContainer