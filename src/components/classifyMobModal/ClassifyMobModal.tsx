import { RiCloseFill } from "react-icons/ri";
import { MdNavigateBefore } from "react-icons/md";
import { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
interface IClassifyMobModal {
   onRequestClose: Function
   isOpen: boolean
}
function ClassifyMobModal({ isOpen, onRequestClose }: IClassifyMobModal) {
   const [womenIsOpen, setWomenIsOpen] = useState<boolean>(false);
   const [menIsOpen, setMenIsOpen] = useState<boolean>(false);
   const [childIsOpen, setChildIsOpen] = useState<boolean>(false);
   const [beautyHealthyIsOpen, setBeautyHealthyIsOpen] = useState<boolean>(false);
   const [headCoverIsOpen, setHeadCoverIsOpen] = useState<boolean>(false);
   const [bagIsOpen, setBagIsOpen] = useState<boolean>(false);
  
   const handleWomenBtnClick= () => {
      setWomenIsOpen(!womenIsOpen);
   }
   const handleMenBtnClick= () => {
      setMenIsOpen(!menIsOpen);
   }
   const handleChildBtnClick=()=>{
      setChildIsOpen(!childIsOpen);
   }
   const handleBeautyBtnClick=()=>{
      setBeautyHealthyIsOpen(!beautyHealthyIsOpen);
   }
   const handleHeadCoverBtnClick=()=>{
      setHeadCoverIsOpen(!headCoverIsOpen);
   }
   const handleBagBtnClick=()=>{
      setBagIsOpen(!bagIsOpen);
   }
   return (
      <div className="w-full flex flex-col justify-between items-start gap-[30px] pt-0 mt-0">
         <button onClick={() => onRequestClose()}>
            <div className="flex flex-row justify-start items-center gap-[8px] text-[18px] pr-[10px] ">
               <p><RiCloseFill /></p>
               <p>بستن</p>
            </div>
         </button>
         <div className="font-semibold text-[20px] pr-[10px]  pb-[5px]">
            <p>دسته بندی ها</p>
         </div>
         <button onClick={() => handleWomenBtnClick()} className="w-full border-b border-gray-300 border-solid pr-[10px]  pb-[9px]">
            <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] ">
               <p>زنانه</p>
               {womenIsOpen ? (<div><MdKeyboardArrowDown /></div>) : (<div><MdKeyboardArrowLeft /></div>)}
            </div>
            {womenIsOpen &&
               <ul className="list-none m-0 pr-[40px] text-right ">
                  <li className="pt-[20px] pb-[5px]">بالا پوش</li>
                  <li className="pt-[5px] pb-[5px]">شلوار</li>
                  <li className="pt-[5px] pb-[5px]">لباس اسپورت و راحتی</li>
                  <li className="pt-[5px] pb-[5px]">سایر محصولات</li>
                  <li className="pt-[5px] pb-[5px]">جین</li>
               </ul>
            }
         </button>
         <button onClick={() => handleMenBtnClick()} className="w-full border-b border-gray-300 border-solid pr-[10px]  pb-[9px]">
            <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] ">
               <p>مردانه</p>
               {menIsOpen ? (<div><MdKeyboardArrowDown /></div>) : (<div><MdKeyboardArrowLeft /></div>)}
            </div>
            {menIsOpen &&
               <ul className="list-none m-0 pr-[40px] text-right ">
                  <li className="pt-[20px] pb-[5px]">بالا پوش</li>
                  <li className="pt-[5px] pb-[5px]">شلوار</li>
                  <li className="pt-[5px] pb-[5px]">لباس اسپورت</li>
                  <li className="pt-[5px] pb-[5px]">سایر محصولات</li>
               </ul>
            }
         </button>
         <button onClick={() => handleChildBtnClick()} className="w-full border-b border-gray-300 border-solid pr-[10px]  pb-[9px]">
            <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] ">
               <p>بچگانه</p>
               {childIsOpen ? (<div><MdKeyboardArrowDown /></div>) : (<div><MdKeyboardArrowLeft /></div>)}
            </div>
            {childIsOpen &&
               <ul className="list-none m-0 pr-[40px] text-right ">
                  <li className="pt-[20px] pb-[5px]">نوزادی</li>
                  <li className="pt-[5px] pb-[5px]">دخترانه</li>
                  <li className="pt-[5px] pb-[5px]">پسرانه</li>
               </ul>
            }
         </button>
         <button onClick={() => handleBeautyBtnClick()} className="w-full border-b border-gray-300 border-solid pr-[10px]  pb-[9px]">
            <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] ">
               <p>زیبایی و سلامت</p>
               {beautyHealthyIsOpen ? (<div><MdKeyboardArrowDown /></div>) : (<div><MdKeyboardArrowLeft /></div>)}
            </div>
            {beautyHealthyIsOpen &&
               <ul className="list-none m-0 pr-[40px] text-right ">
                  <li className="pt-[20px] pb-[5px]">عطر و ادکلن</li>
                  <li className="pt-[5px] pb-[5px]">آرایش و گریم</li>
                  <li className="pt-[5px] pb-[5px]">مراقبت پوست</li>
                  <li className="pt-[5px] pb-[5px]">آرایش و مراقبت مو</li>
                  <li className="pt-[5px] pb-[5px]">بهداشت و مراقبت شخصی</li>
               </ul>
            }
         </button>
           <button onClick={() => handleHeadCoverBtnClick()} className="w-full border-b border-gray-300 border-solid pr-[10px]  pb-[9px]">
            <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] ">
               <p>کلاه/روسری/شال</p>
               {headCoverIsOpen ? (<div><MdKeyboardArrowDown /></div>) : (<div><MdKeyboardArrowLeft /></div>)}
            </div>
            {headCoverIsOpen &&
               <ul className="list-none m-0 pr-[40px] text-right ">
                 <li className="pt-[20px] pb-[5px]">کلاه</li>
                 <li className="pt-[5px] pb-[5px]">شال</li>
                 <li className="pt-[5px] pb-[5px]">روسری</li>
               </ul>
            }
         </button>
          <button onClick={() => handleBagBtnClick()} className="w-full border-b border-gray-300 border-solid pr-[10px]  pb-[9px]">
            <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] ">
               <p>کیف</p>
               {bagIsOpen ? (<div><MdKeyboardArrowDown /></div>) : (<div><MdKeyboardArrowLeft /></div>)}
            </div>
            {bagIsOpen &&
               <ul className="list-none m-0 pr-[40px] text-right ">
                <li className="pt-[20px] pb-[5px]">کیف مجلسی</li>
                <li className="pt-[5px] pb-[5px]">کیف کوله پشتی</li>
               </ul>
            }
         </button>
      </div>
   )
}
export default ClassifyMobModal