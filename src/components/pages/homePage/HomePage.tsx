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
import MobileHeader from "../../mobile-header/MobileHeader";
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
SwiperCore.use([Navigation, Pagination]);
register();
function HomePage() {
  // const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>(null);
  // const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="App">
      <div className="w-full h-full ">
        <div className="invisible w-full h-[80px] lg:hidden"></div>
        <div className="mobile-header w-full h-[80px] fixed top-0 z-[9997]  lg:hidden">
          <MobileHeader />
        </div>
        {/* <div className="invisible w-full h-[154px] hidden"></div> */}
        <div className="desktop-header hidden  lg:block w-full">
          <DesktopHeader />
        </div>
        {/* <div className="desktop-header hidden lg:block">
          <p className="w-full h-[40px] text-white bg-[#A72F3B] pt-[5px] pb-[5px] cursor-pointer">
            با عضومیت در کاستومی اولین سفارش خود را رایگان تحویل بگیرید
          </p>
          <div className="w-full h-[70px] p-[10px] flex justify-between items-center">
            <div className="search w-4/12 h-[30px] border-[#D6D6D6] rounded-[8px] border-solid border-[1px] flex justify-start items-center ">
              <div className="w-[26px] h-[26px] pr-[6px] pl-[6px]  pt-[4px] pb-[4px]">
                <CiSearch color="#A72F3B" />
              </div>
              <div className=" w-full h-[30px] border-r-[1px] border-solid border-[#767B7F] pl-[6px] flex items-center pr-[4px]">
                <input
                  className="w-full h-[23px] pr-[6px] text-[12px] outline-none border-none pb-[4px] placeholder-[#B34B56]"
                  placeholder="جستجو"
                ></input>
              </div>
            </div>
            <div className="w-[120px] h-[30px] cursor-pointer">
              <img className="w-full h-fulll" src="https://s8.uupload.ir/files/capture_85gu.png" alt="logo"></img>
            </div>
            <div className="w-4/12 flex justify-end items-center gap-[10px]">
              <div className="text-[24px] cursor-pointer">
                <MdOutlineManageAccounts color="#A72F3B" />
              </div>
              <div className="text-[24px] cursor-pointer">
                <HiOutlineShoppingBag color="#A72F3B" />
              </div>
              <div className="text-[24px] cursor-pointer">
                <IoMdHeartEmpty color="#A72F3B" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-[40px] pt-[10px] pb-[10px]">
            <div>
              <button onClick={() => openWomenModal()}>
                <p className="cursor-pointer">زنانه</p>
              </button>
              <Modal
                isOpen={womenIsOpen}
                onRequestClose={closeWomenModal}
                contentLabel="Example Modal"
                style={customStyles}
              >
                <div onMouseLeave={closeWomenModal}>
                  <button onClick={() => closeWomenModal()}></button>
                  <Women />
                </div>
              </Modal>
            </div>
            <div>
              <button onClick={() => openMenModal()}>
                <p className="cursor-pointer">مردانه</p>
              </button>
              <Modal
                isOpen={menIsOpen}
                onRequestClose={closeMenModal}
                contentLabel="Example Modal"
                style={customStyles}
              >
                <div onMouseLeave={closeMenModal}>
                  <button onClick={() => closeMenModal()}></button>
                  <Men />
                </div>
              </Modal>
            </div>
            <div>
              <button onClick={() => openChildModal()}>
                <p className="cursor-pointer">بچگانه</p>
              </button>
              <Modal
                isOpen={childIsOpen}
                onRequestClose={closeChildModal}
                contentLabel="Example Modal"
                style={customStyles}
              >
                <div onMouseLeave={closeChildModal}>
                  <button onClick={() => closeChildModal()}></button>
                  <Child />
                </div>
              </Modal>
            </div>
            <div>
              <button onClick={() => openBeautyHealthyModal()}>
                <p className="cursor-pointer"> زیبایی و سلامت</p>
              </button>
              <Modal
                isOpen={beautyHealthyIsOpen}
                onRequestClose={closeBeautyHealthyModal}
                contentLabel="Example Modal"
                style={customStyles}
              >
                <div onMouseLeave={closeBeautyHealthyModal}>
                  <button onClick={() => closeBeautyHealthyModal()}></button>
                  <BeautyHealthy />
                </div>
              </Modal>
            </div>
            <div>
              <button onClick={() => openHeadCoverModal()}>
                <p className="cursor-pointer">کلاه/روسری/شال</p>
              </button>
              <Modal
                isOpen={headCoverIsOpen}
                onRequestClose={closeHeadCoverModal}
                contentLabel="Example Modal"
                style={customStyles}
              >
                <div onMouseLeave={closeHeadCoverModal}>
                  <button onClick={() => closeHeadCoverModal()}></button>
                  <HeadCover />
                </div>
              </Modal>
            </div>
            <div>
              <button onClick={() => openBagModal()}>
                <p className="cursor-pointer">کیف</p>
              </button>
              <Modal
                isOpen={bagIsOpen}
                onRequestClose={closeBagModal}
                contentLabel="Example Modal"
                style={customStyles}
              >
                <div onMouseLeave={closeBagModal}>
                  <button onClick={() => closeBagModal()}></button>
                  <Bag />
                </div>
              </Modal>
            </div>
          </div>
        </div> */}
      </div>
      <main className="w-full h-full ">
        <div className="w-full h-full">
          <BannerSlider />
         
            {/* <div className="swiper1">
              <div className="swiper-container1 ">
                <div className="swiper-slide w-full h-[100vh]">
                  {" "}
                  <img
                    alt="photos"
                    src="https://s8.uupload.ir/files/screenshot_(2)_u41a.png"
                    className="w-full h-full"
                  />
                </div>
                <div className="swiper-slide w-full h-[100vh]">
                  <img
                    alt="photos"
                    src="https://s8.uupload.ir/files/8643a805cd39455a4e8e45857f36b644c72c0121_1713701662_gg4d.png"
                    className="w-full h-full"
                  />
                </div>
                <div className="swiper-slide w-full h-[100vh]">
                  <img
                    alt="shose"
                    src="https://s8.uupload.ir/files/screenshot_(4)_zzvb.png"
                    className="w-full h-full"
                  />
                </div>
                <div className="swiper-slide w-full h-[100vh]">
                  <img
                    alt="skinCare"
                    src="https://s8.uupload.ir/files/screenshot_(6)_ocyu.png"
                    className="w-full h-full"
                  />
                </div>
                <div className="swiper-slide w-full h-[100vh]">
                  <img
                    alt="women2"
                    src="https://s8.uupload.ir/files/2_ibsi.png"
                    className="w-full h-full"
                  />
                </div>
                <div className="swiper-slide w-full h-[100vh]">
                  <img
                    alt="women2"
                    src="https://s8.uupload.ir/files/2_ibsi.png"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="swiper-pagination swiper-pagination1">klk</div>
            
            </div> */}
           
        
          
        </div>
        <div className=" w-full pl-[30px] pr-[30px] xl:pl-[50px] xl:pr-[50px]  pt-[10px] pb-[10px]  ">
          <OffBox />
        </div>
        <div className="container-cart w-full h-[230px] md:h-[144px] xl:h-[90px] pl-[16px] pr-[16px] xl:pl-[30px] xl:pr-[30px] grid grid-cols-2  xl:grid-cols-6 md:grid-cols-3 place-items-center justify-around  xl:pt-[15px] xl:pb-[15px] gap-[10px] ">
          <div className="w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] pt-[10px] pb-[10px] text-[#ffffff] cursor-pointer">
            <p>زنانه</p>
          </div>
          <div className="w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] pt-[10px] pb-[10px] text-[#ffffff] cursor-pointer">
            <p> مردانه</p>
          </div>
          <div className="w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] pt-[10px] pb-[10px] text-[#ffffff] cursor-pointer">
            <p>بچگانه</p>
          </div>
          <div className="w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] pt-[10px] pb-[10px] text-[#ffffff] cursor-pointer">
            <p>کیف</p>
          </div>
          <div className="w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] pt-[10px] pb-[10px] text-[#ffffff] cursor-pointer">
            <p>کفش</p>
          </div>
          <div className="w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] pt-[10px] pb-[10px] text-[#ffffff] cursor-pointer">
            <p>عینک</p>
          </div>
        </div>
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
              <p className="text-[#7B7B7B]">زنانه</p>
              <p className="text-[#7B7B7B]">مردانه</p>
              <p className="text-[#7B7B7B]">بچگانه</p>
              <p className="text-[#7B7B7B]">زیبایی و سلامت</p>
            </div>
            <div className="flex flex-col justify-between items-center gap-[15px]">
              <p>خدمات مشتریان</p>
              <p className="text-[#7B7B7B]">پاسخ به پرسش های متداول</p>
              <p className="text-[#7B7B7B]">رویه های بازگرداندن کالا</p>
              <p className="text-[#7B7B7B]">شرایط استفاده</p>
              <p className="text-[#7B7B7B]">حریم خصوصی</p>
            </div>
            <div className="flex flex-col justify-between items-center gap-[15px]">
              <p>اطلاعات دیجی استایل</p>
              <p className="text-[#7B7B7B]">درباره دیجی استایل</p>
              <p className="text-[#7B7B7B]">تماس با دیجی استایل</p>
              <p className="text-[#7B7B7B]">همکاری با دیجی استایل</p>
            </div>
            <div className="flex flex-col justify-between items-start gap-[20px]">
              <p>تلفن پشتیبانی:</p>
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
      {/* <ProductDetailePage  /> */}
    </div>
    /* </ProductListContext.Provider>
    </> */
  );
}
export default HomePage;
function setIsModalOpen(arg0: boolean) {
  throw new Error("Function not implemented.");
}
