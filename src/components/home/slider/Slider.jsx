import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="img/img-1.jpg" className='sliderImg' alt="" /></SwiperSlide>
        <SwiperSlide><img src="img/img-2.jpg" className='sliderImg' alt="" /></SwiperSlide>
        <SwiperSlide><img src="img/img-3.jpg" className='sliderImg' alt="" /></SwiperSlide>
        <SwiperSlide><img src="img/img-4.jpg" className='sliderImg' alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
