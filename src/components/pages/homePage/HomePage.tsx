import React, { useState, useEffect, createContext, useRef } from "react";
// import ReactModal from 'react-modal';
import "./homePage.css";
// import { PiListBold } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbRewindBackward15 } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { LuTwitter } from "react-icons/lu";

import "swiper/css";
// import BannerSlider from "./components/bannerSlider/BannerSlider";
import OffBox from "../../offBox1/OffBox";
import BoutiqueBanner from "./components/boutiqueBanner/BoutiqueBanner";
import ProductDetailePage from "../productDetailePage/ProductDetailePage";
import MobileHeader from "./components/mobile-header/MobileHeader";
import axios from "axios";
import DesktopHeader from "./components/desktopHeader/DesktopHeader";
import SearchBar from "./components/searchBar/SearchBar";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Controller } from "swiper/modules";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperCore, { Swiper as SwiperType } from "swiper";
import { register } from "swiper/element/bundle";
import BannerSlider from "./components/bannerSlider/BannerSlider";
import { Link } from "react-router-dom";
import ProductCategory from "./components/productcategory/ProductCategory";
SwiperCore.use([Navigation, Pagination]);
register();
function HomePage() {
  return (
    <div className="App">
      <div className="w-full h-full ">
        <div className="invisible w-full h-[80px] lg:hidden"></div>
        <div className="mobile-header w-full h-[80px] fixed top-0 z-[9997]  lg:hidden">
          <MobileHeader />
        </div>
        <div className="desktop-header hidden  lg:block w-full z-[1000000]">
          <DesktopHeader />
        </div>
      </div>
      <main className="w-full h-full ">
        <div className="w-full h-full">
          <BannerSlider />
        </div>
        <div className=" w-full pl-[30px] pr-[30px] xl:pl-[50px] xl:pr-[50px]  pt-[10px] pb-[10px]  ">
          <OffBox />
        </div>
        <ProductCategory />
        <BoutiqueBanner />
        <div className="advantages w-full h-[150px] pt-[15px] pb-[15px] flex justify-center items-center gap-[15px] pr-[16px] pl-[16px]">
          <div className="w-full  flex flex-col justify-between items-center cursor-pointer">
            <div className="w-[30px] h-[30px]">
              <LiaShippingFastSolid className="w-full h-full " />
            </div>
            <div>
              <p className="text-[12px] pt-[5px]">تحویل سریع و ارزان</p>
            </div>
          </div>
          <div className="w-full  flex flex-col justify-between items-center cursor-pointer">
            <div className="w-[30px] h-[30px]">
              <TbRewindBackward15 className="w-full h-full" />
            </div>
            <div>
              <p className="text-[12px] pt-[5px]"> ضمانت بازگشت کالا</p>
            </div>
          </div>
          <div className="w-full  flex flex-col justify-between items-center cursor-pointer ">
            <div className="w-[30px] h-[30px]">
              <IoBagCheckOutline className="w-full h-full" />
            </div>
            <div>
              <p className="text-[12px] pt-[5px]">کالای اورجینال</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full ">
        <div className="w-full lg:hidden">
          <div className="socials  w-full h-[50px] flex justify-center items-center gap-[15px] pr-[16px] pl-[16px] pt-[10px] pb-[10px] border-b-[1px] border-[#F1F1F1] border-solid">
            <div>
              <p className="text-[#7B7B7B] text-[13px]">
                ما را در شبکه های اجتماعی دنبال کنید
              </p>
            </div>
            <div className="w-24px h-[24px]">
              <FaInstagram color="#7B7B7B" className="w-full h-full" />
            </div>
            <div className="w-24px h-[24px]">
              <LiaTelegramPlane color="#7B7B7B" className="w-full h-full" />
            </div>
          </div>
          <div className="quick-access-mobile w-full h-[168px] flex justify-center items-center gap-[25px] pl-[16px] pr-[16px] pt-[12px] pb-[12px]">
            <div className="w-full flex flex-col justify-between items-center gap-[15px]">
              <p className="text-[#7B7B7B]  cursor-pointer text-[14px]">
                پشتیبانی مشتریان
              </p>
              <p className="text-[#7B7B7B]  cursor-pointer text-[14px]">
                سوالات متداول
              </p>
              <p className="text-[#7B7B7B]  cursor-pointer text-[14px]">
                دانلود اپلیکیشن{" "}
              </p>
              <p className="text-[#7B7B7B]  cursor-pointer text-[14px]">
                بازگردانی کالا
              </p>
            </div>
            <div className="w-full flex flex-col justify-between items-center gap-[15px]">
              <p className="text-[#7B7B7B]  cursor-pointer text-[14px]">
                شرایط استفاده
              </p>
              <p className="text-[#7B7B7B]  cursor-pointer text-[14px]">
                حریم خصوصی
              </p>
              <p className="text-[#7B7B7B]  cursor-pointer text-[14px]">
                درباره ما
              </p>
              <p className="text-[#7B7B7B]  cursor-pointer text-[14px]">
                تماس با ما
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-full h-[214px]">
          <div className="quick-access-desktop w-full h-full flex justify-between items-start">
            <div className="flex flex-col justify-between items-center gap-[15px]">
              <p>خرید</p>
              <Link to={`/productList/زنانه`}>
                <p className="text-[#7B7B7B]">زنانه</p>
              </Link>
              <Link to={`/productList/مردانه`}>
                <p className="text-[#7B7B7B]">مردانه</p>
              </Link>
              <Link to={`/productList/بچگانه`}>
                <p className="text-[#7B7B7B]">بچگانه</p>
              </Link>
              <Link to={`/productList/کفش`}>
                <p className="text-[#7B7B7B]">کفش</p>
              </Link>
            </div>
            <div className="flex flex-col justify-between items-center gap-[15px]">
              <p>خدمات مشتریان</p>
              <p className="text-[#7B7B7B]">پاسخ به پرسش های متداول</p>
              <p className="text-[#7B7B7B]">رویه های بازگرداندن کالا</p>
              <p className="text-[#7B7B7B]">شرایط استفاده</p>
              <p className="text-[#7B7B7B]">حریم خصوصی</p>
            </div>
            <div className="flex flex-col justify-between items-center gap-[15px]">
              <p>اطلاعات کاستومی</p>
              <p className="text-[#7B7B7B]">درباره کاستومی</p>
              <p className="text-[#7B7B7B]">تماس با کاستومی</p>
              <p className="text-[#7B7B7B]">همکاری با کاستومی</p>
            </div>
            <div className="flex flex-col justify-between items-start gap-[20px]">
              <div className="flex flex-row justify-between items-center gap-[15px]">
                <p>تلفن پشتیبانی:</p>
                <p>031-36536808</p>
              </div>
              <div className="w-full h-full flex justify-around items-center gap-[80px]">
                <div className="w-24px h-[24px]">
                  <FaInstagram color="#7B7B7B" className="w-full h-full" />
                </div>
                <div className="w-24px h-[24px]">
                  <LiaTelegramPlane color="#7B7B7B" className="w-full h-full" />
                </div>
                <div className="w-24px h-[24px]">
                  <LuTwitter color="#7B7B7B" className="w-full h-full" />
                </div>
              </div>
              <p>ثبت نام در خبرنامه دیجی استایل</p>
              <p>اینجا اینپوت</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default HomePage;
function setIsModalOpen(arg0: boolean) {
  throw new Error("Function not implemented.");
}
