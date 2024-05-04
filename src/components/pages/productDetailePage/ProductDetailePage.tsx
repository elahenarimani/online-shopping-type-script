import { GrFavorite } from "react-icons/gr";
import { GoShareAndroid } from "react-icons/go";
import { useContext, useState } from "react";
import { ProductListContext } from '../../siteSetting/SiteSetting'
import { Outlet, useParams } from "react-router-dom";
import MobileHeader from "../../mobile-header/MobileHeader";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './productDetailePage.css'
import { Navigation, Pagination } from 'swiper/modules';
import { isTemplateExpression } from "typescript";
import DesktopHeader from "../homePage/components/desktopHeader/DesktopHeader";
interface IProduct {
    id: string,
    head_category: string,
    category: string,
    name: string,
    price: number,
    in_stock: number,
    image: string[]
}
function ProductDetailePage() {
    const productListX = useContext(ProductListContext)
    const params = useParams<{ id: string }>()
    return (
        <div>
            <div className="w-full h-full lg:hidden">
                <div className="invisible w-full h-[80px] lg:hidden">
                </div>
                <div className="mobile-header w-full h-[80px] fixed top-0 z-[9997]  lg:hidden">
                    <MobileHeader />
                </div>
                <div className="swiper-container">
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide >
                            <div className="swiper-slide">
                                <img className="w-full h-full" src={productListX?.productList.find(item => item?.id === params.id)?.image[0]} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="swiper-slide">
                                <img className="w-full h-full" src={productListX?.productList.find(item => item?.id === params.id)?.image[1]} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <img className="w-full h-full" src={productListX?.productList.find(item => item?.id === params.id)?.image[2]} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="swiper-pagination"></div>
                <p className="  pl-[16px] pr-[16px] text-right text-[19px] font-medium mt-[25px] mb-[25px]">{productListX?.productList.find(item => item?.id === params.id)?.name}</p>
                <div className="w-full h-full flex flex-row justify-between items-center mt-[15px] mb-[15px] pl-[16px] pr-[16px]">
                    <div className="text-[14px]">
                        <p>مردانه / بالاپوش /تیشرت</p>
                    </div>
                    <div className=" h-[40px] flex justify-end items-center  gap-[20px]">
                        <div className="text-[24px] ">
                            <GoShareAndroid color="#A72F3B" />
                        </div>
                        <div className="text-[24px] ">
                            <GrFavorite color="#A72F3B" />
                        </div>
                    </div>
                </div>
                <div className="invisible w-full h-[53px]">
                </div>
                <div className="w-full h-[53px]  fixed bottom-0 z-10 bg-[#A72F3B] text-white pt-[12px] pb-[12px] text-center">
                    <p>افزودن به سبد خرید</p>
                </div>
            </div>
            <div className="hidden lg:block">
                <DesktopHeader />
                <div className="product-detaile-wrapper ">
                    <p>زنانه/بالاپوش/تیشرت</p>
                    <div className="w-full h-screen flex justify-between items-center ">
                        <div className="w-2/4 h-screen">
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide>
                                    <div className="swiper-slide2">
                                        <img className="w-full h-full" src={productListX?.productList.find(item => item?.id === params.id)?.image[0]} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide2">
                                        <img className="w-full h-full" src={productListX?.productList.find(item => item?.id === params.id)?.image[1]} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide2 ">
                                        <img className="w-full h-full" src={productListX?.productList.find(item => item?.id === params.id)?.image[2]} />
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        <div className=" h-screen">
                            <p>hi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetailePage;