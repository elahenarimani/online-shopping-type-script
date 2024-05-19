function DesktopTotalPrice(){
    return(
        <div className="h-[250px] border-solid border-2 border-[#E6E6E6] rounded-[5px] p-[25px] gap-[10px] flex flex-col justify-between items-center gap-[5px] ">
                        <div className="w-full flex  justify-between items-center gap-[10px]">
                            <p>جمع کل سفارش:</p>
                            <div className="flex justify-between items-center gap-[3px] font-bold ">
                                <p>190</p>
                                <p>تومان</p>
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center gap-[3px]">
                            <p>قیمت نهایی:</p>
                            <div className="flex justify-between items-center gap-[3px] font-bold ">
                                <p >190</p>
                                <p>تومان</p>
                            </div>
                        </div>
                        <div className="w-full h-[52px] flex justify-center items-center bg-[#A72F3B] rounded-[5px] text-white">
                            <p>ثبت و مرحله بعد</p>
                        </div>
                    </div>
    )
}
export default DesktopTotalPrice;