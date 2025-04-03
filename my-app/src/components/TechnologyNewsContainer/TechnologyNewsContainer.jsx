import React from 'react'
import TechnologyNews from '../TechnologyNews/TechnologyNews'
import './TechnologyNewsContainer.css'
function TechnologyNewsContainer() {
  return (
    <div>
      <h1>Technology</h1>
      <div className='technology-news-container'>
        <TechnologyNews heading="New React Version Released" content="React 19 brings several performance improvements, new hooks, and developer tooling upgrades. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan fermentum massa, non iaculis lorem. Proin at lorem at mauris lacinia feugiat. Nullam vitae mauris justo. Curabitur laoreet, elit at volutpat lacinia, magna tellus porttitor nisl, vel tincidunt felis justo nec augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non augue non risus convallis porttitor. Integer tincidunt eros at neque lobortis, a dignissim leo ultrices. In sed libero vel est pulvinar placerat."/>
        <TechnologyNews heading="New React Version Released" content="React 19 brings several performance improvements, new hooks, and developer tooling upgrades. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan fermentum massa, non iaculis lorem. Proin at lorem at mauris lacinia feugiat. Nullam vitae mauris justo. Curabitur laoreet, elit at volutpat lacinia, magna tellus porttitor nisl, vel tincidunt felis justo nec augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non augue non risus convallis porttitor. Integer tincidunt eros at neque lobortis, a dignissim leo ultrices. In sed libero vel est pulvinar placerat."/>
        <TechnologyNews heading="New React Version Released" content="React 19 brings several performance improvements, new hooks, and developer tooling upgrades. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan fermentum massa, non iaculis lorem. Proin at lorem at mauris lacinia feugiat. Nullam vitae mauris justo. Curabitur laoreet, elit at volutpat lacinia, magna tellus porttitor nisl, vel tincidunt felis justo nec augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non augue non risus convallis porttitor. Integer tincidunt eros at neque lobortis, a dignissim leo ultrices. In sed libero vel est pulvinar placerat."/>
        <TechnologyNews heading="Breakthrough in Renewable Energy" content="Scientists have made a breakthrough in solar energy that could significantly reduce costs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec turpis vitae risus congue convallis. Duis tincidunt mi in lectus fringilla, at facilisis arcu volutpat. Praesent sed nulla nulla. Sed bibendum elit nec leo mattis, in dictum justo tincidunt. Aenean convallis nulla at ex pulvinar viverra. Suspendisse potenti. Curabitur at ultrices risus. Phasellus congue libero vel magna efficitur, in pulvinar neque feugiat."/>
      </div>  
    </div>
  )
}

export default TechnologyNewsContainer