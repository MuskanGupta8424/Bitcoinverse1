import React from "react";
import "../Style/Trending.css";
import "../Style/partners.css"
import Carousel from "./Carousel";
import image1 from "../Assist/1910.png.png";
import image2 from '../Assist/1910.png.png';
import image3 from "../Assist/1912.png.png";
import image4 from "../Assist/1911.png.png";
import image5 from "../Assist/1912.png.png";
import left from "../Assist/LEFT (1).png";
import right from "../Assist/RIGHT (1).png";

const slides = [
    {
        title: 'Slide 1',
        text: 'Lorem',
        image: image1,
    },
    {
        title: 'Slide 3',
        text: 'Lorem',
        image: image3,
    },
    {
        title: 'Slide 4',
        text: 'Lorem',
        image: image4,
    },
    {
        title: 'Slide 5',
        text: 'Lorem',
        image: image5,
    },
    {
        title: 'Slide 1',
        text: 'Lorem',
        image: image2,
    },
    {
        title: 'Slide 3',
        text: 'Lorem',
        image: image3,
    },
    {
        title: 'Slide 4',
        text: 'Lorem',
        image: image4,
    },
    {
        title: 'Slide 5',
        text: 'Lorem',
        image: image5,
    },
];
const Trending = () => {
    return (
        <>
            <h1 className="text-center" >
        <div className="trendContainer ">
        <img src={left} alt="" />
        <span style={{ color: "gold", fontSize: "27px", zIndex: "999" }}>Trending Doodles</span>
        <img src={right} alt="" />
      </div>
        </h1>
            <div className=' pb-5' data-aos="fade-up" style={{marginTop:"50px"}}>
                <Carousel images={slides} />
            </div>
        </>
    )
}

export default Trending;
