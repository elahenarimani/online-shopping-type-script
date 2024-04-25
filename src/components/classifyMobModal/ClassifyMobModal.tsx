import { RiCloseFill } from "react-icons/ri";
import { MdNavigateBefore } from "react-icons/md";
interface IClassifyMobModal{
    onRequestClose :Function
    isOpen:boolean  
    }

function ClassifyMobModal({ isOpen,onRequestClose} : IClassifyMobModal){
    return(
        <div className="w-full  flex flex-col justify-between items-start gap-[30px] pt-0 mt-0">
             <button onClick={() => onRequestClose()}>
             <div className="flex flex-row justify-start items-center gap-[8px] text-[18px] pr-[10px] ">
                <p><RiCloseFill /></p>
                <p>بستن</p>
             </div>
             </button>
             <div className="font-semibold text-[20px] pr-[10px]  pb-[5px]">
                <p>دسته بندی ها</p>
             </div> 
             <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] border-b border-gray-500 border-solid pr-[10px]  pb-[9px]">
                <p>زنانه</p>
                <p><MdNavigateBefore /></p>
             </div>
             <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] border-b border-gray-500 border-solid pr-[10px] pt-[9px] pb-[9px]">
                <p>مردانه</p>
                <p><MdNavigateBefore /></p>
             </div>
             <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] border-b border-gray-500 border-solid pr-[10px] pt-[9px] pb-[9px]">
                <p>بچگانه</p>
                <p><MdNavigateBefore /></p>
             </div>
             <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] border-b border-gray-500 border-solid pr-[10px] pt-[9px] pb-[9px]">
                <p>زیبایی و سلامت</p>
                <p><MdNavigateBefore /></p>
             </div>
             <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] border-b border-gray-500 border-solid pr-[10px] pt-[9px] pb-[9px]">
                <p>کلاه/روسری/شال</p>
                <p><MdNavigateBefore /></p>
             </div>
             <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] border-b border-gray-500 border-solid pr-[10px] pt-[9px] ">
                <p>کیف</p>
                <p><MdNavigateBefore /></p>
             </div>
        </div>
    )
}
export default ClassifyMobModal