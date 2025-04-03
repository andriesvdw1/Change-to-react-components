import './App.css'
import React from "react";
import Header from "./components/Header/Header";
import TechnologyNewsContainer from "./components/TechnologyNewsContainer/TechnologyNewsContainer";
import BusinessNewsContainer from "./components/BusinessNewsContainer/BusinessNewsContainer";
import SportsNewsContainer from "./components/SportsNewsContainer/SportsNewsContainer";
function App() {


  return (
    <div>
      <Header/>
      <TechnologyNewsContainer/>
      <BusinessNewsContainer/>
      <SportsNewsContainer/>      
    </div>
  )
}

export default App
