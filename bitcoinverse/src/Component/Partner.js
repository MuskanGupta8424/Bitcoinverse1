import React from 'react'
import left from "../Assist/LEFT (1).png";
import right from "../Assist/RIGHT (1).png";
import partner from '../Assist/1.png'
import partner2 from '../Assist/2.png'
import "../Style/partners.css"

export const Partner = () => {
  return (
    <>
    <div className='py-5 my-5'>
    <div className="trendContainer ">
        <img src={left} alt="" />
        <span style={{fontSize:"30px"}}>OUR PARTNERS</span>
        <img src={right} alt="" />
      </div>
        <div className='partnerDIV py-5 my-6 px-5 mx-3'>
            <img src={partner} alt=""  />
            <img src={partner2} alt="" />
            <img src={partner} alt="" />
        </div>
        </div>
    </>
  )
}
