import React from "react";
import "../Style/About.css";
import img1 from "../Assist/LEARN MORE OVERLAP.png";
import left from "../Assist/LEFT (1).png";
import right from "../Assist/RIGHT (1).png";
import "../Style/Aboutimg.css"
import { Group } from "../Assist";
import coin from "../Assist/Bitcoin BEP2 (BTCB) 02.png"




const About = () => {
  return (
    <div  data-aos="fade-up" class="aos-init aos-animate" >
      <div className="container p-4" id="cont">
        <h1 className="text-center" style={{ color: "gold", fontSize: "40px", zIndex: "999" }}>
        <div className="trendContainer " style={{ color: "gold", fontSize: "40px", zIndex: "999" }}>
        <img src={left} alt=""/>
        <span style={{ color: "gold", fontSize: "36px", zIndex: "999" }}>ABOUT US</span>
        <img src={right} alt=""/>
      </div>
        </h1>
        <div className="row px-8 mx-8">
          <div className="col-12 col-md-6 ">
            <div className="py-5 my-5 " id="abouthead">
              <p className="text-light">
                $BTV token is a governance and utility token used within the
                BitCoinVerse ecosystem to empower a decentralized community
                building at the forefront of web3.
              </p>

              <p className="text-light">
                $BTV token is a governance and utility token
                As the open-source protocol layer of the ecosystem, $BTV token
                serves several purposes
              </p>
              <div className="img pt-5" id="aboutim" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap:"wrap"}}>
                <img src={img1} alt="" />
             <div className="col-12 col-md-6" id="cube" style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
          <div  className="img-fluid">
          <input type="button" value="HIT ME" style={{backgroundColor:"gold" ,border:"none"}} />
        <div className="bix">
        <img style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}} src={coin} alt="" />
            <div className="cards" id='front'></div>
            <div className="cards" id='back'></div>
            <div className="cards" id='left'></div>
            <div className="cards" id='right'></div>
            <div className="cards" id='top'></div>
            <div className="cards" id='bottom'>
                
            </div>
        </div>
      
    </div>

          </div>
                
              </div>
            </div>


          </div>
        

        </div>
      </div>
    </div>
  );
};

export default About;
