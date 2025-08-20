import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useSwiper } from "swiper/react";
import "./bannerSlide.css";
import { Controller } from "swiper/modules";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperCore, { Swiper as SwiperType } from "swiper";
import { register } from "swiper/element/bundle";

SwiperCore.use([Navigation, Pagination]);
function BannerSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      effect="fade"
      navigation={true}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      className="swiper-container-1 w-full h-full  "
    >
      <SwiperSlide className="w-full h-[100vh]">
        <img
          alt="photos"
          src="https://s8.uupload.ir/files/screenshot_(2)_u41a.png"
          className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-[100vh]">
        <img
          alt="photos"
          src="https://s8.uupload.ir/files/8643a805cd39455a4e8e45857f36b644c72c0121_1713701662_gg4d.png"
          className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-[100vh]">
        <img
          alt="shose"
          src="https://s8.uupload.ir/files/screenshot_(4)_zzvb.png"
          className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-[100vh]">
        <img
          alt="skinCare"
          src="https://s8.uupload.ir/files/screenshot_(6)_ocyu.png"
          className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-[100vh]">
        <img
          alt="women"
          src="https://s8.uupload.ir/files/2c627a1efeabeeb2d68a4740aad14b9ccd33235f_1713701900_jj7l.png"
          className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-[100vh]">
        <img
          alt="women2"
          src="https://s8.uupload.ir/files/2_ibsi.png"
          className="w-full h-full"
        />
      </SwiperSlide>
    </Swiper>
  );
}
export default BannerSlider;
