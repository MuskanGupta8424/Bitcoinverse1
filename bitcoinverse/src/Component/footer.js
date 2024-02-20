import React from 'react';
import logo from '../Assist/Dark.png';
import { FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa';
import '../Style/footer.css';
// import Typewriter from './Typewriter';
import Typewriter from 'typewriter-effect';

const Footer = () => {
  return (
    <>
      <div className="footer-background">
        <footer className="footer-section">
          <div className="container">
            <div className="footer-content pt-5 pb-3">
              <div className="row">
                <div className="col-12 col-lg-6" style={{ borderRight: '1px solid #fff' }}>
                  <div className="footer-widget">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src={logo} className="img-fluid" />
                      </a>
                    </div>
                    <div className="footer-text">
                      <p className='text-light'>
                        $BTV is an open-source protocol layer of the ecosystem, a highly secure and useful utility that enables users to participate in the BitCoinVerse ecosystem.
                      </p>
                    </div>
                    <div className=""><span style={{color:"gold",fontSize:"1.8rem",fontWeight:"600"}} >
                    <Typewriter
options={{
    strings: ['OUR SOCIALS'],
    autoStart: true,
    loop: true,
  }}
/>
                    </span>
                      <div className='d-flex  align-items-center py-4 gap-3 '>
                     
                          <a href="/">
                            <FaTwitter className='mx-md-3' style={{ fontSize: '25px' }} />
                          </a>
                          <a href="/">
                            <FaTelegram className='mx-md-3' style={{ fontSize: '25px' }} />
                          </a>
                          <a href="/">
                            <FaDiscord className='mx-md-3' style={{ fontSize: '25px' }} />
                          </a>
                        </div>
                      <div className='d-flex justify-content-between align-items-center'>
                        
                        <div style={{marginTop:"20px",marginLeft:"20px"}}>
                          <img src={require("../Assist/button (3).png")} className='img-fluid w-75' id='whitelabel' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6" style={{marginTop:"20px"}}>
                  <div className="d-flex  justify-content-center my-4">
                    <div className="">
                      
                      {/* <input id="int"  type="text" name="" placeholder='ENTER YOUR EMAIL' /> */}
                      <img src={ require('../Assist/BUTTON (4).png')} className='img-fluid aacc' width={370}  style={{cursor:'pointer'}} />
                    </div>
                  </div>
                  <div className="footer-widget pt-1">
                    <div className="row ps-lg-5 ms-lg-5">
                      <div className="col-12 col-lg-6">
                        <h3 className="socialsLO py-2">ABOUT US</h3>
                        <p className='text-light'>Whitepaper</p>
                        <p className='text-light'>Blog</p>
                        <p className='text-light'>Activity</p>
                        <p className='text-light'>Contact</p>
                      </div>
                      <div className="col-12 col-lg-6">
                        <h3 className="socialsLO py-2">SUPPORT</h3>
                        <p className='text-light'>Help & Support</p>
                        <p className='text-light'>Brand Assets</p>
                        <p className='text-light'>Docs</p>
                        <p className='text-light'>Privacy</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className='pt-4' style={{ color: '#ddd' }}>2023 RESERVED BY BITCOINVERSE INC</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
