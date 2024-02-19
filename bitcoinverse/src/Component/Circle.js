import React from 'react'
import "../Style/Circle.css";
// import c1 from "../Assist/Ellipse 19.png"
// import c2 from "../Assist/Ellipse 27.png"
// import c3 from "../Assist/Ellipse 31.png"
import LEARN from "../Assist/LEARN MORE OVERLAP.png";

// import phn from "../Assist/Group 156.png"
// import bo from "../Assist/Group 159.png"
import { Dark,EnterApp, Group,Protocol } from '../Assist';
const Circle = () => {
  return (

    <>
      <div className='main1 d-none d-xl-flex'  data-aos="fade-up">
        <div className="main">

          <div className="circle1" >
          <div className='circleimg'></div>
          </div>
          
          <div className="circle2">
          <div className='circleimg'></div>

            {/* <img src={c2} alt="" /> */}

          </div>
          <div className="circle3">
          <div className='circleimg'></div>

            {/* <img src={c3} alt="" /> */}

          </div>
          <div className="circle4" style={{}}>
          <div className='circleimg'></div>
          </div>
          <div className="circle5" style={{}}>
            <img className='cirimgs' src={Dark} alt="" style={{width:"100px"}} />
          </div>
        </div>

        <div className="box" style={{}}>
          <div className="box11">
            <div className="b11">

              <h2 style={{ marginLeft: "23px", zIndex: "999" }}> Botcoin Protocol</h2>
            </div>
            <div className="">
              <p className='text-left text-light px-4' style={{ zIndex: "999" ,fontSize:"15px"}}>
              Every cryptocurrency has its own dedicated blockchain that exclusively accepts transactions in specific tokens. Converting BTC to ETH or viceversa is not a simple process, as it typically involves converting to fiat currency first, followed by purchasing the desired cryptocurrency.
              </p>
            </div>

            <div className="bi2" style={{ display: "flex", justifyContent: "space-between", columnGap: "10px" }}>
              <img style={{ marginTop: "10px", marginLeft: "40px" }} src={LEARN} alt="" />
              <img src={Protocol} className='bbtn' style={{ height: "100px", marginTop: "-20px", marginLeft: "40px" }} />
            </div>

            <span className="shadow"></span>
          </div>
        </div>
        <div className="box" >
          <div className="box11" style={{ opacity: "0.9", marginTop: "-300px", marginLeft: "-220%", borderRadius: "2px 2px 90px 2px", padding: "0.5rem", backgroundColor: "rgba(7, 29, 41, 1)" }}>
            <div className="b11" style={{}}>

              <h2 style={{ marginLeft: "23px", zIndex: "999" }}> BTC Swap</h2>
            </div>
            <div className="">
              <p className='text-left text-light px-4' style={{ zIndex: "999" ,fontSize:"15px"}}>
              Every cryptocurrency has its own dedicated blockchain that exclusively accepts transactions in specific tokens. Converting BTC to ETH or viceversa is not a simple process, as it typically involves converting to fiat currency first, followed by purchasing the desired cryptocurrency.
              </p>
            </div>

            <div className="bi2" style={{ display: "flex", justifyContent: "space-evenly" }}>
              <img style={{ marginTop: "10px" }} src={LEARN} alt="" />
              <img src={Group} style={{ height: "100px", marginTop: "-20px", marginLeft: "100px" }} />
            </div>
            <span className="shadow"></span>
          </div>
        </div>

      </div>
      <div className=' w-100 d-block d-xl-none' style={{
        background: "#071d29"
      }}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-6'>
              <div className="box12 m-4">
                <div className="b11">

                  <h2 style={{ marginLeft: "23px", zIndex: "999" }}> Botcoin Protocol</h2>
                </div>
                <div className="">
                  <p className='text-left text-light px-4' style={{ zIndex: "999" }}>
                    BitCoinVerse has created an innovative Automated Market Maker
                    (AMM) Multichain DEX that includes Cross-chain and Hybrid
                    Liquidity Features
                  </p>
                </div>

                <div className="bi2" style={{ display: "flex", justifyContent: "space-between", columnGap: "10px" }}>
                  <img src={LEARN} alt="" className='img-fluid' />
                  <img src={Protocol} className='img-fluid' />
                </div>

                <span className="shadow"></span>
              </div>
            </div>
            <div className='col-12 col-lg-6'>
              <div className="box12 m-4" >
                <div className="b11" >

                  <h2 style={{ marginLeft: "23px", zIndex: "999" }}> BTC Swap</h2>
                </div>
                <div className="">
                  <p className='text-left text-light px-4' style={{ zIndex: "999" }}>
                    BitCoinVerse has created an innovative Automated Market Maker
                    (AMM) Multichain DEX that includes Cross-chain and Hybrid
                    Liquidity Features
                  </p>
                </div>

                <div className="bi2" style={{ display: "flex", justifyContent: "space-between", columnGap: "10px"}}>
                  <img style={{ marginTop: "10px" }} src={LEARN} alt="" className='img-fluid' />
                  <img src={Group} className='img-fluid' />
                </div>
                <span className="shadow"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default Circle
