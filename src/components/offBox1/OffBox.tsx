import './offbox.css'
import './offBoxSlider/OffBoxSllider'
import Slider from "./offBoxSlider/OffBoxSllider";
import { SlArrowLeft } from "react-icons/sl";
function OffBox() {
    return (
        <div className='off-box w-full h-[420px] rounded-[16px] pt-[10px] pb-[10px]'>
            <div className='w-full h-[80px] flex flex-row justify-between items-center pl-[24px] pr-[24px] pt-[32px] pb-[32px]'>
                <p className='text-white font-bold'>پیشنهاد شگفت انگیز</p>
                <div className='flex justify-between items-center gap-[5px]'>
                    <p className='text-white whitespace-nowrap'>مشاهده همه</p>
                    <SlArrowLeft className='w-[13px] h-[13px]  ' color='white'/>
                </div>
            </div>
            <div className='w-full h-full'>
            <Slider />
            </div>
        </div>
    )
}
export default OffBox