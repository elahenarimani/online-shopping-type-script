import MobileHeader from "../../mobile-header/MobileHeader";
import "./shippingPage.css";
import Button from "../../button/Button";
import DesktopHeader from "../homePage/components/desktopHeader/DesktopHeader";
import { useState } from "react";
function ShippingPage() {
  const [address, setAddress] = useState("");
  return (
    <div>
      <div className="w-full h-full md:hidden">
        <div className="invisible w-full h-[80px] md:hidden"></div>
        <div className="mobile-header w-full h-[80px] fixed top-0 z-[9997]  md:hidden">
          <MobileHeader />
        </div>
        <div className="w-full h-full pl-[8px] pr-[8px] flex flex-col  justify-start gap-[5px]">
          <p className="mt-[5px]">آدرس خود را وارد کنید</p>
          <textarea
            className="w-full h-[120px] boder-[#F4F1EE]  p-[10px] border-b-[1px] outline-none "
            placeholder="آدرس"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
          {/* {console.log(address)} */}
          <p>هزینه ارسال: فقط 49 هزار تومان برای تمامی سفارش ها</p>
        </div>
        <div className="invisible w-full h-[53px]"></div>
        <button className="w-full h-[53px]  fixed bottom-0 z-10 bg-[#A72F3B] text-white pt-[12px] pb-[12px] text-center mt-[5px]">
          <p>تایید اطلاعلات و ادامه</p>
        </button>
      </div>
      <div className="w-full h-full hidden md:block">
        <DesktopHeader />
        <div className="w-full h-full mt-[17px] p-[120px]">
          <p className="text-[16px] mb-[10px]">
            سفارش شما به آدرس زیر ارسال میشود:
          </p>
          <textarea
            className="w-full h-[135px] boder-[#F4F1EE]  p-[20px] border-[1px] outline-none "
            placeholder="آدرس"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
          <div className="flex justify-end">
          <div className="w-3/12 h-[52px] flex justify-center items-center bg-[#A72F3B] rounded-[5px] text-white mt-[40px] ">
            <p>ثبت و مرحله بعد</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default ShippingPage;
