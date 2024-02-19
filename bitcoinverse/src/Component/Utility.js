

import "../Style/utiitiesss.css";
import coin from "../Assist/u1.png.png";
import music from "../Assist/nft4.png.png";
import qun from "../Assist/u5.png.png";
import box from "../Assist/nft2.png.png";
import nft3 from "../Assist/nft3.png.png";
import nft4 from "../Assist/nft6.png.png";
import left from "../Assist/LEFT (1).png";
import right from "../Assist/RIGHT (1).png";


import React from 'react'

const Utility = () => {
    return (
        <>
          <h1 className="text-center" style={{ color: "gold", zIndex: "999" }}>
        <div className="trendContainer ">
        <img src={left} alt="" />
        <span style={{ color: "gold", fontSize: "28px", zIndex: "999" }}>BTV NFT Utilities</span>
        <img src={right} alt="" />
      </div>
        </h1>
          <div className="container py-5 mt-5" data-aos="fade-up">
            <div className="row">
              <div className="col-12 col-md-3 ">
                <div
                  className="position-relative a"
                  style={{
                    borderRadius: "40px",
                    background: "#051B27",
                    height: '100%'
                  }}
                >
                  <p className="text-light p-4 m-0">
                    BitcoinVerse Doodle NFTs is going to come up with a Marketplace
                    for Bitcoin NFTs where people can trade their bitcoin NFTs at
                    very less fee.
                  </p>
                  <img src={coin} className="img-fluid d-block ms-auto yaya" width={150} height={90} />
                </div>
              </div>
              <div className="col-12 col-md my-2">
                <div className="row ">
                  <div className="col-12 col-md my-2">
                    <div
                      className="position-relative a"
                      style={{
                        borderRadius: "40px",
                        background: "#051B27"
                      }}
                    >
                      <p className="text-light p-4 m-0">
                        BitcoinVerse Doodle NFTs is going to come up with a Marketplace
                        for Bitcoin NFTs where people can trade their bitcoin NFTs at
                        very less fee.
                      </p>
                      <img src={music} className="img-fluid d-block ms-auto" width={90} height={90} />
                    </div>
                  </div>
                  <div className="col-12 col-md my-2">
                    <div
                      className="position-relative a"
                      style={{
                        borderRadius: "40px",
                        background: "#051B27"
                      }}
                    >
                      <p className="text-light p-4">
                        BitcoinVerse Doodle NFTs is going to come up with a Marketplace
                        for Bitcoin NFTs where people can trade their bitcoin NFTs at
                        very less fee.
                      </p>
                      <img src={qun} className="img-fluid d-block ms-auto" width={90} height={90} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md my-2">
                    <div
                      className="position-relative a"
                      style={{
                        borderRadius: "40px",
                        background: "#051B27"
                      }}
                    >
                      <p className="text-light p-4 m-0">
                        BitcoinVerse Doodle NFTs holders get a chance to win a mystery box on a monthly basis which contains a NFT with
                        more rarity
                      </p>
                      <img src={box} className="img-fluid d-block ms-auto" width={90} height={90} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md my-2">
                  <div
                    className="position-relative a"
                    style={{
                      borderRadius: "40px",
                      background: "#051B27"
                    }}
                  >
                    <p className="text-light p-4 m-0">
                      Each Doodle allows its owner to vote for experiences and activations paid for by
                      the Doodles Community Treasury.
                    </p>
                    <img src={nft3} className="img-fluid d-block ms-auto" width={90} height={90} />
                  </div>
                </div>
                <div className=" col-12 col-md my-2">
                  <div
                    className="position-relative a"
                    style={{
                      borderRadius: "40px",
                      background: "#051B27"
                    }}
                  >
                    <p className="text-light p-4 m-0">
                      BitcoinVerse Doodle NFTs holders get a chance to win a mystery box on a monthly basis which contains a NFT with
                      more rarity
                    </p>
                    <img src={nft4} className="img-fluid d-block ms-auto" width={90} height={90} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
    
        </>
      );
}

export default Utility
