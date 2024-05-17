import { GrFavorite } from "react-icons/gr";
import { GoShareAndroid } from "react-icons/go";
import { useContext, useState } from "react";
import { ProductListContext } from '../../siteSetting/SiteSetting'
import { BuyCartContext } from '../../siteSetting/SiteSetting'
import { Outlet, useParams } from "react-router-dom";
import MobileHeader from "../../mobile-header/MobileHeader";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './productDetailePage.css'
import { Navigation, Pagination } from 'swiper/modules';
import { TbBus, TbRewindBackward15 } from "react-icons/tb";
import DesktopHeader from "../homePage/components/desktopHeader/DesktopHeader";
import { BsShieldCheck } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

import { FiMinus } from "react-icons/fi";
import Button from "../../button/Button";
interface IProduct {
    id: string,
    head_category: string,
    category: string,
    name: string,
    price: number,
    in_stock: number,
    image: string[]
}


function increasCounter() {

}
function ProductDetailePage() {
    const productListX = useContext(ProductListContext);
    let buyCartX = useContext(BuyCartContext);
    const params = useParams()

    let [counter, setCounter] = useState<number>(0)
    function increasCounter() {
        setCounter(counter += 1)
    }
    function decreaseCounter() {
        setCounter(counter -= 1)
    }
    function addBuyCart(productId: number | undefined | string) {
        const buyCartIndexFinder = buyCartX?.buyCart.findIndex(item => item.productId === productId)
        console.log("Buy cart index finder:", buyCartIndexFinder);
        if (buyCartIndexFinder === -1) {
            buyCartX.setBuyCart([...buyCartX.buyCart, { productId: productId, count: 1 }]);
        }
        else {
            const currentItem = buyCartX?.buyCart[buyCartIndexFinder]
            currentItem.count += 1;
            buyCartX.setBuyCart([...buyCartX.buyCart]);
        }
    }
    // function removeFromBuyCart(productId: number | undefined | string) {
    //     const buyCartIndexFinder = buyCartX?.buyCart.findIndex(product => product.productId === productId)
    //     if (buyCartIndexFinder >= 0) {
    //         if (buyCartX.buyCart[buyCartIndexFinder].count > 1) {
    //             const currentItem = buyCartX?.buyCart[buyCartIndexFinder]
    //             currentItem.count -= 1;
    //             buyCartX.setBuyCart([...buyCartX.buyCart])
    //         } else {
    //             const filteredBuyCart = buyCartX.buyCart.filter(item => item.productId !== productId)
    //             buyCartX.setBuyCart([...filteredBuyCart])

    //         }
    //     }
    // }


    return (
        <div>
            <div className="w-full h-full md:hidden">
                <div className="invisible w-full h-[80px] md:hidden">
                </div>
                <div className="mobile-header w-full h-[80px] fixed top-0 z-[9997]  md:hidden">
                    <MobileHeader />
                </div>
                <div className="swiper-container">
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide >
                            <div className="swiper-slide">
                                <img className="w-full h-full" src={productListX?.productList.find(item => item?.id === params.id)?.image[0]} alt={`${productListX?.productList.find(item => item?.id === params.id)?.name ?? "photo"}`} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="swiper-slide">
                                <img className="w-full h-full" src={productListX?.productList.find(item => item?.id === params.id)?.image[1]} alt={`${productListX?.productList.find(item => item?.id === params.id)?.name ?? "photo"}`} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <img className="w-full h-full" src={productListX?.productList.find(item => item?.id === params.id)?.image[2]} alt={`${productListX?.productList.find(item => item?.id === params.id)?.name ?? "photo"}`} />
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
                            <IoMdHeartEmpty color="#A72F3B" />
                        </div>
                    </div>
                </div>
                <div className="invisible w-full h-[53px]">
                </div>
                <div className="w-full h-[53px]  fixed bottom-0 z-10 bg-[#A72F3B] text-white pt-[12px] pb-[12px] text-center">
                    <p>افزودن به سبد خرید</p>
                </div>
            </div>
            <div className="w-full h-full hidden md:block">
                <DesktopHeader />
                <div className="product-detaile-wrapper h-screen">
                    <p>زنانه/بالاپوش/تیشرت</p>
                    <div className="w-full h-full flex flex-row justify-start items-start gap-[80px] ">
                        <div className="w-1/3 h-full ">
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide>
                                    <div className="swiper-slide2">
                                        <img className="w-full h-full" src={productListX?.productList.find(item => item?.id === params.id)?.image[0]} alt={`${productListX?.productList.find(item => item?.id === params.id)?.name ?? "photo"}`} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide2">
                                        <img className="w-full h-full" src={productListX?.productList.find(item => item?.id === params.id)?.image[1]} alt={`${productListX?.productList.find(item => item?.id === params.id)?.name ?? "photo"}`} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide2 ">
                                        <img className="w-full h-full" src={productListX?.productList.find(item => item?.id === params.id)?.image[2]} alt={`${productListX?.productList.find(item => item?.id === params.id)?.name ?? "photo"}`} />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="w-1/3  h-full flex flex-col justify-between items-start  ">
                            {/* <div className="flex flex-col judsify-between items-center"> */}
                            <div className="w-full text-[24px] cursor-pointer flex justify-end">
                                <GoShareAndroid color="#A72F3B" />
                            </div>
                            <div className="text-[20px]">{productListX?.productList.find(item => item?.id === params.id)?.name}</div>
                            {/* </div> */}
                            <div className="w-full flex flex-row justify-between items-center">
                                <div><p className="text-[14px] text-[#9B9B9B]">فروشنده: کاستومی</p></div>
                                <div className="flex  flex-row justify-between items-center text-[28px] ">
                                    <p>190</p>
                                    <p>تومان</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row justify-start itwms-center gap-[10px] text-[#9B9B9B]">
                                    <div className="cursor-pointer"><TbBus /></div>
                                    <div className=" text-[12px]">آماده ارسال</div>
                                </div>
                                <div className="flex flex-row justify-start items-center gap-[10px] text-[#9B9B9B]">
                                    <div className=" cursor-pointer"><BsShieldCheck /></div>
                                    <div className=" text-[12px]">گارانتی اسالت سلامت فیزیکی کالا</div>
                                </div>
                            </div>
                            <div className="w-full flex flex-row justify-start items-center gap-[8px] ">
                                <p className="w-[50px] important!">تعداد:</p>
                                <button className="w-[20px] h-[20px]" onClick={() => increasCounter()}><p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white "><FaPlus size={15} /></p></button>
                                <p className="w-[20px] flex justify-center items-center">{counter}</p>
                                <button className={`w-[20px] h-[20px] rounded-[50%] ${counter > 0 ? 'bg-[#A72F3B] rounded-[50%]' : 'opacity-50 rounded-[50%]'}`}
                                    disabled={counter === 0}
                                    onClick={() => decreaseCounter()}>
                                    <p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white "><FiMinus size={15} /></p>
                                </button>
                            </div>
                            {/* <div className="w-full flex flex-row justify-start items-center gap-[8px] ">
                                <p className="w-[50px] important!">تعداد:</p>
                                <button className="w-[20px] h-[20px]" onClick={() => increasCounter(params.id)}><p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white "><FaPlus size={15} /></p></button>
                                <p className="w-[20px] flex justify-center items-center">{params.id && (buyCartX?.buyCart.find(item => item.productId == +(params?.id ?? ""))?.count ?? 0)}</p>
                                <button className={`w-[20px] h-[20px] rounded-[50%] ${(buyCartX?.buyCart.find(product => product?.productId == +(params?.id ?? ""))?.count ?? 0) > 0 ? 'bg-[#A72F3B] rounded-[50%]' : 'opacity-50 rounded-[50%]'}`}
                                    disabled={buyCartX?.buyCart.find(product => product?.productId == +(params?.id ?? ""))?.count == 0}
                                    onClick={() => removeFromBuyCart(params.id)}>
                                    <p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white "><FiMinus size={15} /></p>
                                </button>
                            </div> */}
                            <div className="h-[48px]"></div>
                            <div className="w-full flex flex-row justify-between items-center gap-[20px]">
                                <div className="w-11/12">
                                    <Button className=" w-full h-[48px]  text-white bg-[#A72F3B] text-center pt-[11px] pb-[11px] rounded-[5px] " onClickHandler={ }><p>افزودن به سبد خرید</p></Button>
                                </div>
                                <div className="w-[48px] h-[48px] text-[24px] cursor-pointer border-[1px] border-[#A72F3B] text-center pt-[11px] pb-[11px] pl-[11px] pr-[11px] rounded-[5px]">
                                    <IoMdHeartEmpty color="#A72F3B" />
                                </div>
                            </div>
                            <div className="advantages w-full h-[150px] pt-[15px] pb-[15px] flex justify-center items-center gap-[15px] pr-[16px] pl-[16px]">
                                <div className="w-full  flex flex-col justify-between items-center cursor-pointer text-[#9B9B9B]">
                                    <div className="w-[56px] h-[56px] mb-[24px]">
                                        <LiaShippingFastSolid className="w-full h-full " />
                                    </div>
                                    <div>
                                        <p className="text-[12px] pt-[5px]">تحویل سریع و ارزان</p>
                                    </div>
                                </div>
                                <div className="w-full  flex flex-col justify-between items-center cursor-pointer text-[#9B9B9B]">
                                    <div className="w-[56px] h-[56px] mb-[24px]">
                                        <TbRewindBackward15 className="w-full h-full" />
                                    </div>
                                    <div>
                                        <p className="text-[12px] pt-[5px]"> ضمانت بازگشت کالا</p>
                                    </div>
                                </div>
                                <div className="w-full  flex flex-col justify-between items-center cursor-pointer text-[#9B9B9B]">
                                    <div className="w-[56px] h-[56px] mb-[24px]">
                                        <IoBagCheckOutline className="w-full h-full" />
                                    </div>
                                    <div>
                                        <p className="text-[12px] pt-[5px]">کالای اورجینال</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetailePage;