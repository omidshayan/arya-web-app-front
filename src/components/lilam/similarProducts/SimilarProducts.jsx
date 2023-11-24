import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import './SimilarProducts.css';




export default function SimilarProducts() {
  return (
    <>
        <div className="similarTitle">محصولات مشابه</div>
        <div className="similarProducts">
        <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          <div className="nameSimilar">یخچال فریز آلمانی اصل (مخصوص رستوران ها) با ضمانت یک ساله</div>
          <div className="priceSimilar">450000 افغانی</div>
        </SwiperSlide>

        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          <div className="nameSimilar">موبایل سامسونگ</div>
          <div className="priceSimilar">2500 افغانی</div>
        </SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          <div className="nameSimilar">آیفون 15 رنگ سیاه</div>
          <div className="priceSimilar">150000 افغانی</div>
        </SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          <div className="nameSimilar">کمد دیواری </div>
          <div className="priceSimilar">35400 افغانی</div>
        </SwiperSlide>

      </Swiper>
        </div>
    </>
  )
}
