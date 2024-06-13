import MobileHeader from "../../mobile-header/MobileHeader";
import './shippingPage.css'
function ShippingPage(){
    return(
        <div className="w-full h-full md:hidden">
        <div className="invisible w-full h-[80px] md:hidden"></div>
        <div className="mobile-header w-full h-[80px] fixed top-0 z-[9997]  md:hidden">
          <MobileHeader />
        </div>
        <div className="w-full h-full pl-[8px] pr-[8px]">
        <p className="mt-[5px]">
         آدرس خود را وارد کنید
        </p>
        <textarea className="w-full h-[120px] boder-[#F4F1EE]  p-[10px] border-b-[1px] outline-none " placeholder="آدرس"></textarea>
        <p>هزینه ارسال: فقط 49 هزار تومان برای تمامی سفارش ها</p>
        </div>
        <div className="invisible w-full h-[53px]"></div>
        
          <Button
            className="w-full h-[53px]  fixed bottom-0 z-10 bg-[#A72F3B] text-white pt-[12px] pb-[12px] text-center"
            
          >
            <p>تایید اطلاعلات و ادامه</p>
          </Button>
        
      </div>
       
    )
}
export default ShippingPage