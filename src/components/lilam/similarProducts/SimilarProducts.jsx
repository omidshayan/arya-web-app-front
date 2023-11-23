import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './SimilarProducts.css';

// import required modules
import { Pagination } from 'swiper/modules';


export default function SimilarProducts() {
  return (
    <>
        <div className="similarTitle">محصولات مشابه</div>
        <div className="similarProducts">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper p-10"
      >
        <SwiperSlide> <img src="https://swiperjs.com/demos/images/nature-4.jpg" /><span className="nameSimilar">یخچال فریز آلمانی</span></SwiperSlide>
        <SwiperSlide> <img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
        <SwiperSlide> <img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
        <SwiperSlide> <img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
        <SwiperSlide> <img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
      </Swiper>
        </div>
    </>
  )
}
