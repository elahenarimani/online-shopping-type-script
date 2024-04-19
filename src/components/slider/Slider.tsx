
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Slider(){
    return(
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]}
        spaceBetween={2}
        slidesPerView={1}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        <SwiperSlide className='w-full h-[100vh]'>
            <img alt="child" src='https://s8.uupload.ir/files/screenshot_(2)_u41a.png' className='w-full h-full' />
        </SwiperSlide>
        <SwiperSlide className='w-full h-[100vh]'>
          <img alt="shose" src='https://s8.uupload.ir/files/screenshot_(4)_zzvb.png' className='w-full h-full' />
        </SwiperSlide>
        <SwiperSlide className='w-full h-[100vh]'>
          <img alt="skinCare" src='https://s8.uupload.ir/files/screenshot_(6)_ocyu.png' className='w-full h-full' />
        </SwiperSlide>
        {/* <SwiperSlide className='w-full h-[100vh]'>
          <img alt="women" src='https://s8.uupload.ir/files/screenshot_(9)_u47c.png' className='w-full h-full' />
        </SwiperSlide>
        <SwiperSlide className='w-full h-[100vh]'>
          <img alt="women2" src='https://s8.uupload.ir/files/screenshot_(7)_r0p7.png' className='w-full h-full' />
        </SwiperSlide> */}
      </Swiper>
    )
}
export default Slider