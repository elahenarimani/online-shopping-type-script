import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { EffectFade } from 'swip er/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import SwiperCore from 'swiper';


import 'swiper/swiper-bundle.css';
import './OffBoxSllider.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function OffBoxSlider() {
    return (
        <div className='swiper-container pr-[16px] relative '>
            <Swiper
                modules={[Navigation]}

                spaceBetween={10}
                slidesPerView={'auto'}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: any) => console.log(swiper)}
                effect="fade"
                navigation={{

                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}

                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className='w-[182px] lg:w-[182px]  bg-white pl-[5px] pr-[5px] pt-[5px] pb-[5px] flex flex-col justify-between items-center gap-[8px] rounded-[8px] '>
                        <div className='w-[150px]'>
                            <img alt="photo" src='https://s8.uupload.ir/files/ezgif-7-45ac331f23_ti7.jpg' className='w-full h-full' />
                        </div>
                        <div>
                            <div className='w-full flex flex-row justify-between items-center gap-[70px]'>
                                <div className='w-[40px] h-[20px] bg-[#A72F3B] rounded-[15px] pl-[4px] pr-[4px] pt-[3px] pb-[3px] text-white text-[12px]' >
                                    <p>5%</p>
                                </div>
                                <p>100تومان</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row justify-end pl-[10px] text-[12px] line-through text-[#CFD0D2]'>
                            <p >10000</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[182px] lg:w-[182px]  bg-white pl-[5px] pr-[5px] pt-[5px] pb-[5px] flex flex-col justify-between items-center gap-[8px] rounded-[8px] '>
                        <div className='w-[150px]'>
                            <img alt="photo" src='https://s8.uupload.ir/files/ezgif-7-ca901b25a1_mh7f.png' className='w-full h-full' />
                        </div>
                        <div>
                            <div className='w-full flex flex-row justify-between items-center gap-[70px]'>
                                <div className='w-[40px] h-[20px] bg-[#A72F3B] rounded-[15px] pl-[4px] pr-[4px] pt-[3px] pb-[3px] text-white text-[12px]' >
                                    <p>5%</p>
                                </div>
                                <p>100تومان</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row justify-end pl-[10px] text-[12px] line-through text-[#CFD0D2]'>
                            <p >10000</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[182px] lg:w-[182px]  bg-white pl-[5px] pr-[5px] pt-[5px] pb-[5px] flex flex-col justify-between items-center gap-[8px] rounded-[8px] '>
                        <div className='w-[150px]'>
                            <img alt="photo" src='https://s8.uupload.ir/files/ezgif-4-8e585b3b96_5nbr.png' className='w-full h-full' />
                        </div>
                        <div>
                            <div className='w-full flex flex-row justify-between items-center gap-[70px]'>
                                <div className='w-[40px] h-[20px] bg-[#A72F3B] rounded-[15px] pl-[4px] pr-[4px] pt-[3px] pb-[3px] text-white text-[12px]' >
                                    <p>5%</p>
                                </div>
                                <p>100تومان</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row justify-end pl-[10px] text-[12px] line-through text-[#CFD0D2]'>
                            <p >10000</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[182px] lg:w-[182px]  bg-white pl-[5px] pr-[5px] pt-[5px] pb-[5px] flex flex-col justify-between items-center gap-[8px] rounded-[8px] '>
                        <div className='w-[150px]'>
                            <img alt="photo" src='https://s8.uupload.ir/files/ezgif-3-32903411e8_hy8p.png' className='w-full h-full' />
                        </div>
                        <div>
                            <div className='w-full flex flex-row justify-between items-center gap-[70px]'>
                                <div className='w-[40px] h-[20px] bg-[#A72F3B] rounded-[15px] pl-[4px] pr-[4px] pt-[3px] pb-[3px] text-white text-[12px]' >
                                    <p>5%</p>
                                </div>
                                <p>100تومان</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row justify-end pl-[10px] text-[12px] line-through text-[#CFD0D2]'>
                            <p >10000</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[182px] lg:w-[182px]  bg-white pl-[5px] pr-[5px] pt-[5px] pb-[5px] flex flex-col justify-between items-center gap-[8px] rounded-[8px] '>
                        <div className='w-[150px]'>
                            <img alt="photo" src='https://s8.uupload.ir/files/ezgif-5-468b41d0cc_1an2.png' className='w-full h-full' />
                        </div>
                        <div>
                            <div className='w-full flex flex-row justify-between items-center gap-[70px]'>
                                <div className='w-[40px] h-[20px] bg-[#A72F3B] rounded-[15px] pl-[4px] pr-[4px] pt-[3px] pb-[3px] text-white text-[12px]' >
                                    <p>5%</p>
                                </div>
                                <p>100تومان</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row justify-end pl-[10px] text-[12px] line-through text-[#CFD0D2]'>
                            <p >10000</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[182px] lg:w-[182px]  bg-white pl-[5px] pr-[5px] pt-[5px] pb-[5px] flex flex-col justify-between items-center gap-[8px] rounded-[8px] '>
                        <div className='w-[150px]'>
                            <img alt="photo" src='https://s8.uupload.ir/files/ezgif-3-39b7307de1_wji9.png' className='w-full h-full' />
                        </div>
                        <div>
                            <div className='w-full flex flex-row justify-between items-center gap-[70px]'>
                                <div className='w-[40px] h-[20px] bg-[#A72F3B] rounded-[15px] pl-[4px] pr-[4px] pt-[3px] pb-[3px] text-white text-[12px]' >
                                    <p>5%</p>
                                </div>
                                <p>100تومان</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row justify-end pl-[10px] text-[12px] line-through text-[#CFD0D2]'>
                            <p >10000</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[182px] lg:w-[182px]  bg-white pl-[5px] pr-[5px] pt-[5px] pb-[5px] flex flex-col justify-between items-center gap-[8px] rounded-[8px] '>
                        <div className='w-[150px]'>
                            <img alt="photo" src='https://s8.uupload.ir/files/ezgif-4-37a1c91e0c_0v29.png' className='w-full h-full' />
                        </div>
                        <div>
                            <div className='w-full flex flex-row justify-between items-center gap-[70px]'>
                                <div className='w-[40px] h-[20px] bg-[#A72F3B] rounded-[15px] pl-[4px] pr-[4px] pt-[3px] pb-[3px] text-white text-[12px]' >
                                    <p>5%</p>
                                </div>
                                <p>100تومان</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row justify-end pl-[10px] text-[12px] line-through text-[#CFD0D2]'>
                            <p >10000</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[182px] lg:w-[182px]  bg-white pl-[5px] pr-[5px] pt-[5px] pb-[5px] flex flex-col justify-between items-center gap-[8px] rounded-[8px] '>
                        <div className='w-[150px]'>
                            <img alt="photo" src='https://s8.uupload.ir/files/ezgif-7-bbf34f2cb7_n798.png' className='w-full h-full' />
                        </div>
                        <div>
                            <div className='w-full flex flex-row justify-between items-center gap-[70px]'>
                                <div className='w-[40px] h-[20px] bg-[#A72F3B] rounded-[15px] pl-[4px] pr-[4px] pt-[3px] pb-[3px] text-white text-[12px]' >
                                    <p>5%</p>
                                </div>
                                <p>100تومان</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row justify-end pl-[10px] text-[12px] line-through text-[#CFD0D2]'>
                            <p >10000</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[182px] lg:w-[182px]  bg-white pl-[5px] pr-[5px] pt-[5px] pb-[5px] flex flex-col justify-between items-center gap-[8px] rounded-[8px] '>
                        <div className='w-[150px]'>
                            <img alt="photo" src='https://s8.uupload.ir/files/ezgif-2-9bb63f00b2_c740.png' className='w-full h-full' />
                        </div>
                        <div>
                            <div className='w-full flex flex-row justify-between items-center gap-[70px]'>
                                <div className='w-[40px] h-[20px] bg-[#A72F3B] rounded-[15px] pl-[4px] pr-[4px] pt-[3px] pb-[3px] text-white text-[12px]' >
                                    <p>5%</p>
                                </div>
                                <p>100تومان</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row justify-end pl-[10px] text-[12px] line-through text-[#CFD0D2]'>
                            <p >10000</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className="block swiper-button-prev absolute  z-10000000 " ></div>
            <div className="block swiper-button-next absolute z-10000000" ></div>
        </div>
    )
}
export default OffBoxSlider