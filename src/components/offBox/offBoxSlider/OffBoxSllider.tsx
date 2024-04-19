import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation]);

function OffBoxSlider() {
    return (
        <div className='pr-[16px] relative '>
            <Swiper
                // modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]}
                
                spaceBetween={250}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: any) => console.log(swiper)}
                //   effect="fade"
                navigation={{

                    nextEl: '.swiper-button-next-2',
                    prevEl: '.swiper-button-prev-2',
                }

                }
            //   pagination={{ clickable: true }}
            //   scrollbar={{ draggable: true }}
            >



                <SwiperSlide>
                    <div className='w-[300px]  bg-white pl-[5px] pr-[5px] pt-[5px] pb-[5px]'>

                        <img alt="photo" src='https://s8.uupload.ir/files/ezgif-7-ca901b25a1_mh7f.png' className='w-full h-full' />


                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[300px]  bg-white pl-[5px] pr-[5px] pt-[5px] pb-[5px]'>
                        <img className='w-full h-full' src='https://s8.uupload.ir/files/ezgif-7-45ac331f23_ti7.jpg' alt="photo" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[300px] bg-white pl-[5px] pr-[5px] pt-[5px] pb-[70px]'>
                        <img className='w-full h-full' src="https://s8.uupload.ir/files/ezgif-4-8e585b3b96_5nbr.png" alt="photo" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[300px]  bg-white pl-[5px] pr-[5px] pt-[5px] pb-[5px]'>
                        <img className='w-full h-full' src="https://s8.uupload.ir/files/ezgif-3-32903411e8_hy8p.png" alt="photo" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[300px] bg-white pl-[5px] pr-[5px] pt-[5px] pb-[5px]'>
                        <img className='w-full h-full' src="https://s8.uupload.ir/files/ezgif-5-468b41d0cc_1an2.png" alt="photo" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[300px]  bg-white pl-[5px] pr-[5px] pt-[5px] pb-[5px]'>
                        <img className='w-full h-full' src="https://s8.uupload.ir/files/ezgif-3-39b7307de1_wji9.png" alt="photo" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[300px]  bg-white '>
                        <img className='w-full h-full' src="https://s8.uupload.ir/files/ezgif-4-37a1c91e0c_0v29.png" alt="photo" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[300px] h-[400px] bg-white pl-[5px] pr-[5px] pt-[5px] pb-[5px]'>
                        <img className='w-full h-full' src="https://s8.uupload.ir/files/ezgif-7-bbf34f2cb7_n798.png" alt="photo" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[300px] h-[400px] bg-white pl-[5px] pr-[5px] pt-[5px] pb-[5px]'>
                        <img className='w-full h-full' src="https://s8.uupload.ir/files/ezgif-2-9bb63f00b2_c740.png" alt="photo" />

                    </div>
                </SwiperSlide>


            </Swiper>
            <div className=" swiper-button-prev-2 absolute  z-100" style={{ fontSize: '20px', top: '50%', left: '50px' }}></div>
            <div className=" swiper-button-next-2 absolute  z-100" style={{ fontSize: '20px', top: '50%', left: '50px' }}></div>
        </div>
    )
}
export default OffBoxSlider