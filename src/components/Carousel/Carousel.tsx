import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "./Carousel.css";
import "swiper/css";

SwiperCore.use([Autoplay]);

export const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={13}
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={800}
    >
      <div className="swiper-wrapper">
        <SwiperSlide>
          <div className="swiper-image1" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image2" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image3" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image4" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image1" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image2" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image3" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image4" />
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
