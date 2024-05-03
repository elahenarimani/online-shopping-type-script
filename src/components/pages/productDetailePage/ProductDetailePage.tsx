import { GrFavorite } from "react-icons/gr";
import { GoShareAndroid } from "react-icons/go";
import { useContext } from "react";
import { ProductListContext } from '../../siteSetting/SiteSetting'
import { Outlet, useParams } from "react-router-dom";
import MobileHeader from "../../mobile-header/MobileHeader";

import Slider from "../../slider/Slider";
function ProductDetailePage() {
    const productListX = useContext(ProductListContext)
    let params = useParams()
    return (
        <div className="w-full h-full lg:hidden">
            <div className="invisible w-full h-[80px] lg:hidden"></div>
            <div className="mobile-header w-full h-[80px] fixed top-0 z-[9997]  lg:hidden">
                <MobileHeader />
            </div>
            <div className="w-full h-full ">
              <ProductDetailePage/>    
            </div>
            
            <p className="  pl-[16px] pr-[16px] text-right text-[19px] font-medium mt-[25px] mb-[25px]">{productListX?.productList.find(item => item?.id === params.id)?.name}</p>
            <div className="w-full h-full flex flex-row justify-between items-center mt-[15px] mb-[15px] pl-[16px] pr-[16px]">
                <div className="text-[14px]">
                    <p>مردانه / بالاپوش /تیشرت</p>
                </div>
                <div className=" h-[40px] flex justify-end items-center  gap-[20px]">
                    <div className="text-[24px] ">
                        <GoShareAndroid color="#A72F3B" />
                    </div>
                    <div className="text-[24px] ">
                        <GrFavorite color="#A72F3B" />
                    </div>
                </div>
            </div>
            <div className="invisible w-full h-[53px]">
            </div>
            <div className="w-full h-[53px]  fixed bottom-0 z-10 bg-[#A72F3B] text-white pt-[12px] pb-[12px] text-center">
                <p>افزودن به سبد خرید</p>
            </div>

        </div>
    )
}
export default ProductDetailePage;