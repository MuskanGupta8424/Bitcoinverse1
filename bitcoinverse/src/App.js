import React, { useEffect, useState } from 'react'
import "../src/App.css"
import About from './Component/About'
import Doddles from './Component/Doddles'
import Wybtv from "../src/Component/Wybtv"
import Containerss from './Component/Containerss'
import Trending from './Component/Trending'
import Aos from "aos";
import FAQ from './Component/FAQ'
import { Partner } from './Component/Partner'
import Footer from './Component/footer'
import Utility from './Component/Utility' 
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/Style/Style.css"
import Curser from './Component/Cusrser/Curser'

const App = () => {
  

  useEffect(() => {
      Aos.init({
          duration: 1200,
      });
  }, []);
  return (
    <>
      <div style={{ background: 'rgba(7, 29, 41, 1)', overflow:"hidden"}}>


        <Curser />
        <Containerss />
        <About />
        <Wybtv />
        <Doddles />
        <Utility />
        <Trending />
        <FAQ />
        <Partner />
        <Footer/>
        
        </div>
    </>
  )
}

export default App

