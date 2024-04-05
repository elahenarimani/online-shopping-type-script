import React, { useState } from 'react';
import './App.css';
import { MdOutlineManageAccounts } from "react-icons/md";
import { PiListBold } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Input from "./components/input/Input";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbRewindBackward15 } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
function App() {
  const [search , setSearch] = useState<string|number>("")
  return (
    <div className="App">
      <header >
        <div className='mobile-header w-full flex flex-col justify-between items-center lg:hidden'>
            <div className='sigin-wrapper w-full h-[40px] flex flex-row justify-end items-center border-b-[1px] border-solid boder-[#F4F1EE] gap-[8px]'>
              <p className='text-[13px] font-bold'>فروشگاه من</p>
              <div className='text-[24px]  pl-[24px]'>
                <MdOutlineManageAccounts  color="#A72F3B" />
              </div>
            </div>
            <div className='item-shopping-wrapper w-full h-[40px] pl-[16px] pr-[16px] flex flex-row justify-between items-center'>
              <div className='w-[24px] h-[24px] flex justify-start gap-[5px]'>
                <div className='text-[24px]'><HiOutlineShoppingBag color="#A72F3B" /></div>
                <div className='text-[24px]'><IoMdHeartEmpty color="#A72F3B" /></div>
              </div>
              
              <div className='w-[96px] h-[24px]'><p  className='w-full h-fulll' >کاستومی لوگو</p></div>
              <div className='text-[24px]'><PiListBold color="#A72F3B"  /></div>
            </div>
            <div className='serach-wrapper w-full h-[40px] pl-[16px] pr-[16px]'>
              <div className='search w-full h-[30px] border-[#D6D6D6] rounded-[8px] border-solid border-[1px] flex justify-start items-center '>
                  <div className='w-[26px] h-[26px] pr-[6px] pl-[6px]  pt-[4px] pb-[4px]'>
                    <CiSearch   color="#A72F3B" />
                  </div>
                  <div className=' w-full h-[30px] border-r-[1px] border-solid border-[#767B7F] pl-[6px] flex items-center pr-[4px]'>
                    <input className='w-full h-[23px] pr-[6px] text-[12px] outline-none border-none pb-[4px] placeholder-[#B34B56]' placeholder='جستجو'></input>
                  </div>
              </div>
            </div>
        </div>
        <div className='desktop-header hidden lg:block'>
             <p className='w-full h-[40px] text-white bg-[#A72F3B] pt-[5px] pb-[5px] cursor-pointer'>با عضومیت در کاستومی اولین سفارش خود را رایگان تحویل بگیرید</p>
             <div className='w-full h-[70px] p-[10px] flex justify-between items-center'>
                <div className='search w-4/12 h-[30px] border-[#D6D6D6] rounded-[8px] border-solid border-[1px] flex justify-start items-center '>
                    <div className='w-[26px] h-[26px] pr-[6px] pl-[6px]  pt-[4px] pb-[4px]'>
                      <CiSearch   color="#A72F3B" />
                    </div>
                    <div className=' w-full h-[30px] border-r-[1px] border-solid border-[#767B7F] pl-[6px] flex items-center pr-[4px]'>
                      <input className='w-full h-[23px] pr-[6px] text-[12px] outline-none border-none pb-[4px] placeholder-[#B34B56]' placeholder='جستجو'></input>
                    </div>
                </div>
                <div className='w-4/12 cursor-pointer'><p   >کاستومی لوگو</p></div>
                <div className='w-4/12 flex justify-end items-center gap-[10px]'>
                    <div className='text-[24px] cursor-pointer'><MdOutlineManageAccounts  color="#A72F3B" /></div>
                    <div className='text-[24px] cursor-pointer'><HiOutlineShoppingBag color="#A72F3B" /></div>
                    <div className='text-[24px] cursor-pointer'><IoMdHeartEmpty color="#A72F3B" /></div>   
                </div>
             </div>
             <div className='flex justify-center items-center gap-[40px] pt-[10px] pb-[10px]'>
                <p className='cursor-pointer'>زنانه</p>
                <p className='cursor-pointer'>مردانه</p>
                <p className='cursor-pointer'>بچه گانه</p>
                <p className='cursor-pointer'>زیبایی و سلامت</p>
                <p className='cursor-pointer'>کلاه روسری شال</p>
                <p className='cursor-pointer'>کیف</p>
             </div>
        </div>
      </header>
      <main className='w-full h-full '>
        <div className='w-full h-[360px] bg-[#767B7F]'>
        {/* <img src='./image/banner1' alt='کوهنوردی' className='w-full h-full'></img> */}
        </div >
        <div className='container-cart w-full h-[230px] md:h-[144px] xl:h-[90px] pl-[16px] pr-[16px] xl:pl-[30px] xl:pr-[30px] grid grid-cols-2  xl:grid-cols-6 md:grid-cols-3 place-items-center justify-around  pt-[10px] pb-[10px] gap-[10px] '>
          <div className='w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] pt-[10px] pb-[10px] text-[#ffffff] cursor-pointer'><p>شومیز</p></div>
          <div className='w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] pt-[10px] pb-[10px] text-[#ffffff] cursor-pointer'><p>بالا پوش مردانه</p></div>
          <div className='w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] pt-[10px] pb-[10px] text-[#ffffff] cursor-pointer'><p>نوزاد</p></div>
          <div className='w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] pt-[10px] pb-[10px] text-[#ffffff] cursor-pointer'><p>لوازم شخصی برقی</p></div>
          <div className='w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] pt-[10px] pb-[10px] text-[#ffffff] cursor-pointer'><p>کلاه</p></div>
          <div className='w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] pt-[10px] pb-[10px] text-[#ffffff] cursor-pointer'><p>کیف</p></div>
          
        </div>
        <div className='advantages w-full h-[150px] pt-[15px] pb-[15px] flex justify-center items-center gap-[15px] pr-[16px] pl-[16px]'>
                    <div className='w-full  flex flex-col justify-between items-center cursor-pointer'>
                        <div className='w-[30px] h-[30px]'><LiaShippingFastSolid className='w-full h-full '/></div>
                        <div><p className='text-[12px] pt-[5px]'>تحویل سریع و ارزان</p></div>
                    </div>
                    <div className='w-full  flex flex-col justify-between items-center cursor-pointer'>
                        <div className='w-[30px] h-[30px]'><TbRewindBackward15 className='w-full h-full'/></div>
                        <div><p className='text-[12px] pt-[5px]'> ضمانت بازگشت کالا</p></div>
                    </div>
                    <div className='w-full  flex flex-col justify-between items-center cursor-pointer '>
                        <div className='w-[30px] h-[30px]'><IoBagCheckOutline className='w-full h-full'/></div>
                        <div><p className='text-[12px] pt-[5px]'>کالای اورجینال</p></div>
                    </div>
          </div>
      </main>
      <footer className='w-full '>
         <div className='w-full lg:hidden'>
         <div className='socials  w-full h-[50px] flex justify-center items-center gap-[15px] pr-[16px] pl-[16px] pt-[10px] pb-[10px] border-b-[1px] border-[#F1F1F1] border-solid'>
              <div><p className='text-[#7B7B7B] text-[13px]'>ما را در شبکه های اجتماعی دنبال کنید</p></div>
              <div  className='w-24px h-[24px]'><FaInstagram color='#7B7B7B' className='w-full h-full'/></div> 
              <div  className='w-24px h-[24px]'><LiaTelegramPlane color='#7B7B7B' className='w-full h-full'/></div>
          </div>
          <div className='quick-access-mobile w-full h-[168px] flex justify-center items-center gap-[25px] pl-[16px] pr-[16px] pt-[12px] pb-[12px]'>
            <div className='w-full flex flex-col justify-between items-center gap-[15px]'>
              <p className='text-[#7B7B7B]  cursor-pointer text-[14px]'>پشتیبانی مشتریان</p>
              <p className='text-[#7B7B7B]  cursor-pointer text-[14px]'>سوالات متداول</p>
              <p className='text-[#7B7B7B]  cursor-pointer text-[14px]'>دانلود اپلیکیشن </p>
              <p className='text-[#7B7B7B]  cursor-pointer text-[14px]'>بازگردانی کالا</p>
            </div>
            <div className='w-full flex flex-col justify-between items-center gap-[15px]'>
              <p className='text-[#7B7B7B]  cursor-pointer text-[14px]'>شرایط استفاده</p>
              <p className='text-[#7B7B7B]  cursor-pointer text-[14px]'>حریم خصوصی</p>
              <p className='text-[#7B7B7B]  cursor-pointer text-[14px]'>درباره ما</p>
              <p className='text-[#7B7B7B]  cursor-pointer text-[14px]'>تماس با ما</p>
            </div>
          </div>
         </div>
         <div className='hidden lg:block w-full h-[214px]'>
            <div className='quick-access-desktop w-full h-full flex justify-between items-center'>
              <div className='flex flex-col justify-between items-center '>
                <p>خرید</p>
                <p>زنانه</p>
                <p>مردانه</p>
                <p>بچگانه</p>
                <p>زیبایی و سلامت</p>
              </div>
              <div className='flex flex-col justify-between items-center'>
                <p>خدمات مشتریان</p>
                <p>پاسخ به پرسش های متداول</p>
                <p>رویه های بازگرداندن کالا</p>
                <p>شرایط استفاده</p>
                <p>حریم خصوصی</p>
              </div>
              <div className='flex flex-col justify-between items-center'>
                <p>اطلاعات دیجی استایل</p>
                <p>درباره دیجی استایل</p>
                <p>تماس با دیجی استایل</p>
                <p>همکاری با دیجی استایل</p>
              </div>
              <div>
                <p>تلفن پشتیبانی:</p>
                <div className='flex justify-between items-center'>
                  <div  className='w-24px h-[24px]'><FaInstagram color='#7B7B7B' className='w-full h-full'/></div> 
                  <div  className='w-24px h-[24px]'><LiaTelegramPlane color='#7B7B7B' className='w-full h-full'/></div>
                </div>
                <p>ثبت نام در خبرنامه دیجی استایل</p>
              </div>
            </div>
         </div>
      </footer>
    </div>
  );
}

export default App;
