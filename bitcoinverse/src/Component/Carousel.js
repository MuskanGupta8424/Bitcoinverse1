import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import '../Style/Carousel.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Carousel({ images }) {
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 800) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(5);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        cssMode={true}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='car-div'>
                <img src={image.image} alt="" />
                <h3>{image.title}</h3>
                <button className='hover-button py-2 '>Collect Now</button>
              </div>
            </SwiperSlide>

          ))
        }

      </Swiper>
    </>
  );
}
