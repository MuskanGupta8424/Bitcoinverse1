import React from "react";
import "../Style/About.css";
import "../Style/Boy.css"
import img3 from "../Assist/image 1356 (1).png"
// import img1 from "../Assist/ENTER APP (1).png";
import img4 from "../Assist/2nd.png";
// import { EnterApp } from "../Assist";

const Doddles = () => {
  return (
    <div className="container pt-5 mt-5"  data-aos="fade-up">
      <div className="row p-5 mt-lg-5" >
        <div className="col-12 col-md-6 mt-lg-3" style={{ marginTop: "-100px" }}>
          <h1 className="text-light"><span style={{ color: 'rgb(255, 214, 0)' }}>1,000</span> Doodles inscribed <br /> forever on the Bitcoin blockchain</h1>
          <p className="py-2" style={{ color: '#ddd' }}>
            BitCoinVerse Doodle NFTs are the first ever highly byte-perfect
            uploads of the original doodles onto the Bitcoin Blockchain
            using Ordinals.
          </p>

          <div className="img py-4">
            <img src={img4} alt="" className=""  width={'auto'} height={40} />
          </div>
        </div>
        <div className="col-12 col-md-6" >
          <div className="boy py-4">
            <div className=" d-block d-md-none ">
              <img src={img3} alt="" className="img-fluid"  />

            </div>
            <div className="boy1 d-none d-md-block ">
              <img src={img3} alt="" className="img-fluid" style={{
                minWidth: "360px"
              }} />
              <img src={img3} alt="" className="img-fluid" style={{
                minWidth: "350px"
              }} />
              <img src={img3} alt="" className="img-fluid" style={{
                minWidth: "350px"
              }} />
              <img src={img3} alt="" className="img-fluid" style={{
                minWidth: "350px"
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doddles;
