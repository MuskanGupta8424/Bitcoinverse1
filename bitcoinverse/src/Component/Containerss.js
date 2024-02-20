import React, { useEffect, useState } from 'react'
import "../Style/Circle.css";
import "../Style/Component.css";
import Circle from './Circle'
import {Dark,EnterApp} from "../Assist"
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import Typewriter from 'typewriter-effect';


import "../Style/Curser.css"
const Containerss = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    } else {

      setScrolled(false);
    }
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [open, setopen] = useState(false);
  let parth = "/"
  return (
    <>
    
      <div id="header" className=''>
        <header className={`header ${scrolled ? 'scrolled' : ''}`} style={{ height: '90px' }}>
          <div style={{ height: '90px' }}>
            <div className="container" style={{ height: '90px' }}>
              <div className="navbar-2">
               
                <div className="brand my-3">
                  <img src={Dark} alt="" className="img-fluid w-20" style={{width:"100px"}}  />
                </div>
                <span className="overlay"></span>
                <div className={` ${open ? "menu is-active" : "menu"}`} id="menu">
                  <ul className="menu-inner">
                    {/* <li
                      className="menu-item px-1  d-black d-xl-none "
                      style={{ textAlign: "end" }}
                    > */}
                      <span
                        className="menu-link  text-danger"
                        style={{ fontSize: "24px", cursor: "pointer", textAlign:"end"}}
                        onClick={() => setopen(!open)}
                      >
                        {!open ? (
                          <HiMenu className="text-light" style={{ fontSize: 25 }} />
                        ) : (
                          <IoCloseSharp
                            className="text-light"
                            style={{ fontSize: 25 }}
                          />
                        )}
                      </span>
                    {/* </li> */}
                    {/* <li className="menu-item px-3"> */}
                      <span
                        className="menu-link "
                        style={{
                          color: `${parth === "/" ? "hsl(13, 83%, 50%)" : "#000"}`,
                        }}
                        onClick={() => {
                          setopen(!open);
                        }}
                      >
                        HOME
                      </span>
                     
                    {/* </li> */}
                    {/* <li className="menu-item px-3"> */}
                    <span
                        className="menu-link "
                        style={{
                          color: `${parth === "/" ? "hsl(13, 83%, 50%)" : "#000"}`,
                        }}
                        onClick={() => {
                          setopen(!open);
                        }}
                      >
                      ABOUT US
                        
                      </span>
                     
                    {/* </li> */}
                    {/* <li className="menu-item px-3" onClick={() => { }}> */}
                      <span
                        href="#"
                        class="dropdown-toggle menu-link "
                        data-toggle="dropdown"
                      >
                       OUR PRODUCTS
                      </span>
                      
                    {/* </li> */}
                    {/* <li
                      className="menu-item px-3"
                      onClick={() => {
                        setopen(!open);
                      }}
                    > */}
                      <span
                        className="menu-link "
                        style={{
                          color: `${parth === "/Services" ? "hsl(13, 83%, 50%)" : "#000"
                            }`,
                        }}
                      >
                        FAQS
                      </span>
                    {/* </li> */}
                    {/* <li className="menu-item px-3" onClick={() => { }}> */}
                      <span
                        className="menu-link "
                        style={{
                          color: `${parth === "/Services" ? "hsl(13, 83%, 50%)" : "#000"
                            }`,
                        }}
                      >
                        INSCRIPTIONS
                      </span>
                    {/* </li> */}
                  </ul>
                </div>{" "}
                <ul
                  id="nav"
                  class="nav nav-pills clearfix right d-none d-lg-flex m-auto"
                  role="tablist"
                  style={{marginLeft:""}}
                >
                  <li className="px-3">
                    <span
                      href="#"
                      className="light"
                      style={{ cursor: "pointer" }}
                    >
                      HOME
                    </span>
                  </li>
                  <li className="px-3">
                    <span
                      href="#"
                      className="light"
                      style={{ cursor: "pointer" }}
                    >
                      OUR PRODUCTS
                    </span>
                  </li>
                  <li className="px-3">
                    <span
                      href="#"
                      className="light"
                      style={{ cursor: "pointer" }}
                    >
                      ABOUT US
                    </span>
                  </li>
                  <li className="px-3">
                    <span
                      href="#"
                      className="light"
                      style={{ cursor: "pointer" }}
                    >
                      FAQS
                    </span>
                  </li>
                  <li className="px-3">
                    <span
                      href="#"
                      className="light"
                      style={{ cursor: "pointer" }}
                    >
                      INSCRIPTIONS
                    </span>
                  </li>
                </ul>
                <div className="ms-auto d-flex justify-content-end">
                  <img src={require('../Assist/BUTTON (1).png')} className='img-fluid w-75' />
                </div>
                <div
                  className="burger d-black d-lg-none"
                  id="burger"
                  onClick={() => setopen(!open)}
                >
                  {!open ? (
                    <HiMenu className="text-light" style={{ fontSize: 25 }} />
                  ) : (
                    <IoCloseSharp className="text-light" style={{ fontSize: 25 }} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <div className='container'  style={{}} >
          <img src={require("../Assist/Bitcoin-3.png")} className='img-fluid Bitcoin ' />                         
          <div className='row mainsection'  style={{}}>
            <div className='col-12 col-lg-6 position-relative' style={{}}>
              <h1 className='main-heding' >
                BUILD THE 
                FUTURE WITH  <br /> <span style={{ color: '#FFD600' }}>
                {/* <Typewriter text={text} /> */}
                <Typewriter
  options={{
    strings: ['BITCOIN', 'BITCOINVERSE'],
    autoStart: true,
    loop: true,
  }}
/>
                </span>
              </h1>
            </div>
            <div className='col-12 col-lg-6 position-relative py-5'>
              <img src={EnterApp} className='img-fluid d-block m-auto img-2' width={370} style={{ right: -10 }} />
            </div>
          </div>
        </div>
      </div>
      
      <Circle />

    </>
  )
}

export default Containerss
