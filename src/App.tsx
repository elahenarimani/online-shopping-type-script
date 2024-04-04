import React, { useState } from 'react';
import './App.css';
import { MdOutlineManageAccounts } from "react-icons/md";
import { PiListBold } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Input from "./components/input/Input";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
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
             <p className='w-full h-[40px] text-white bg-[#A72F3B] pt-[5px] pb-[5px]'>با عضومیت در کاستومی اولین سفارش خود را رایگان تحویل بگیرید</p>
             <div className='w-full h-[70px] p-[10px] flex justify-between items-center'>
                <div className='search w-4/12 h-[30px] border-[#D6D6D6] rounded-[8px] border-solid border-[1px] flex justify-start items-center '>
                    <div className='w-[26px] h-[26px] pr-[6px] pl-[6px]  pt-[4px] pb-[4px]'>
                      <CiSearch   color="#A72F3B" />
                    </div>
                    <div className=' w-full h-[30px] border-r-[1px] border-solid border-[#767B7F] pl-[6px] flex items-center pr-[4px]'>
                      <input className='w-full h-[23px] pr-[6px] text-[12px] outline-none border-none pb-[4px] placeholder-[#B34B56]' placeholder='جستجو'></input>
                    </div>
                </div>
                <div className='w-4/12 '><p   >کاستومی لوگو</p></div>
                <div className='w-4/12 flex justify-end items-center gap-[10px]'>
                    <div className='text-[24px]'><MdOutlineManageAccounts  color="#A72F3B" /></div>
                    <div className='text-[24px]'><HiOutlineShoppingBag color="#A72F3B" /></div>
                    <div className='text-[24px]'><IoMdHeartEmpty color="#A72F3B" /></div>
                    
                </div>
             </div>
        </div>
      </header>
      <main>
        
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
