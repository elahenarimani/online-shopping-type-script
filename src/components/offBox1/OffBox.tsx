import './offbox.css'
import './offBoxSlider/OffBoxSllider'
import OffBoxSlider from './offBoxSlider/OffBoxSllider';

import { SlArrowLeft } from "react-icons/sl";
function OffBox() {
    return (
        <div className='off-box w-full h-[420px] rounded-[16px] pt-[5px] pb-[5px]'>
            <div className='w-full h-[30px] flex flex-row justify-between items-center pl-[24px] pr-[24px] pt-[32px] pb-[32px]'>
                <p className='text-white font-bold'>پیشنهاد شگفت انگیز</p>
                <div className='flex justify-between items-center gap-[5px]'>
                    <p className='text-white whitespace-nowrap'>مشاهده همه</p>
                    <SlArrowLeft className='w-[13px] h-[13px]  ' color='white'/>
                </div>
            </div>
            <div className='w-full  pr-[10px] pl-[10px]'>
            <OffBoxSlider/>
            </div>
        </div>
    )
}
export default OffBox