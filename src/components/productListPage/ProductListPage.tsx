import { useContext } from "react";
import { ProductListContext } from '../siteSetting/SiteSetting'
import { Link } from "react-router-dom";
import MobileHeader from "../mobile-header/MobileHeader";
import DesktopHeader from "../pages/homePage/components/desktopHeader/DesktopHeader";
import './ProductListPage.css';
import { BuyCartContext } from '../siteSetting/SiteSetting'
import { useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiX } from "react-icons/fi";

function ProductListPage() {
    const productListX = useContext(ProductListContext)
    let buyCartX = useContext(BuyCartContext)

    return (
        <div>

            {/* <ul>
                {productListX?.productList.map(item => (
                    <li key={item.id}>
                        <Link to={'/product/${item.id}'}>{item.name}</Link>
                    </li>
                ))}
            </ul> */}
            {/* <div className="w-full h-full md:hidden">
                <div className="invisible w-full h-[80px] lg:hidden">
                </div>
                <div className="mobile-header w-full h-[80px] fixed top-0 z-[9997]  lg:hidden">
                    <MobileHeader />
                </div>
            </div> */}
            <div className="mobile-wrapper w-full h-full md:hidden">
                <div className="invisible w-full h-[80px] md:hidden">
                </div>
                <div className="mobile-header w-full h-[80px] fixed top-0 z-[9997]  md:hidden">
                    <MobileHeader />
                </div>
                <div className="w-full p-[15px]">
                    <div className="w-full p-[15px] flex justify-between items-start gap-[10px] border-solid border border-[#E6E6E6] rounded-[5px] ">
                        <div className=" min-w-[70px] h-[105px] rounded-[5px] bg-black">
                            {/* <img/> */}
                        </div>
                        <div className="w-full flex flex-col justify-between items-start gap-[5px]">
                            <p>نام کالا</p>
                            <p>فروشنده: کاستومی</p>
                            <div className="w-full flex flex-row justify-start items-center gap-[8px] ">
                                <p className="w-[50px] important!">تعداد:</p>
                                <button className="min-w-[20px] h-[20px]" ><p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white "><FaPlus size={15} /></p></button>
                                <p className="w-[20px] flex justify-center items-center"></p>
                                <button className="min-w-[20px] h-[20px] rounded-[50%] "
                                >
                                    <p className="w-[20px] h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white "><FiMinus size={15} /></p>
                                </button>
                            </div>
                            <div className="w-full flex justify-between items-center gap-[10px]">
                                <p>قیمت:</p>
                                <div className="w-full flex justify-start items-center gap-[3px] text-[#A72F3B] font-bold">
                                    <p >190</p>
                                    <p >تومان</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <FiX />
                        </div>
                    </div>
                    <div className="w-full h-[45px] border-solid  border-[#E6E6E6] border-b flex justify-between items-center gap-[10px]">
                        <p>جمع کل سفارش:</p>
                        <div className="flex justify-between items-center gap-[3px] font-bold ">
                            <p>190</p>
                            <p>تومان</p>
                        </div>
                    </div>
                    <div className="w-full h-[45px] border-solid  border-[#E6E6E6] border-b flex justify-between items-center gap-[10px]">
                        <p>قیمت نهایی:</p>
                        <div className="flex justify-between items-center gap-[3px] font-bold ">
                            <p >190</p>
                            <p>تومان</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[52px] flex justify-center items-center bg-[#A72F3B] rounded-[5px] text-white fixed bottom-0">
                    <p>ثبت و مرحله بعد</p>
                </div>
            </div>
            <div className="desktop-wrapper w-full h-full hidden md:block ">
                <DesktopHeader />
                <div className="product-detaile-wrapper h-screen  max-w-[70%]">
                    <p className="mb-[10px]">سبد خرید شما</p>
                    <div className="w-full h-full flex justify-between items-start gap-[25px]">
                        <div className="w-3/4 h-[200px] border-solid border-2 border-[#E6E6E6] rounded-[5px] flex justify-between items-center p-[20px] gap-[10px]">
                            <div className=" min-w-[70px] h-[105px] rounded-[5px] bg-black">
                                {/* <img className="w-full h-full "/> */}
                            </div>
                            <div className="min-w-1/5 flex flex-col justify-between items-start gap-[5px]">
                                <p>نام کالا</p>
                                <p>فروشنده: کاستومی</p>
                            </div>
                            <div className="min-w-1/5 flex flex-row justify-start items-center gap-[8px] ">
                                <p className="min-w-[50px] important!">تعداد:</p>
                                <button className="min-w-[20px] h-[20px]" ><p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white "><FaPlus size={15} /></p></button>
                                <p className="min-w-[20px] flex justify-center items-center"></p>
                                <button className="min-w-[20px] h-[20px] rounded-[50%] "
                                >
                                    <p className="min-w-[20px] h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white "><FiMinus size={15} /></p>
                                </button>
                            </div>
                            <div className="min-w-1/5 flex justify-between items-center gap-[10px]">
                                <p>قیمت:</p>
                                <div className="w-full flex justify-between items-center gap-[3px] text-[#A72F3B] font-bold">
                                    <p >190</p>
                                    <p >تومان</p>
                                </div>
                            </div>
                            <div className="w-1/5 flex justify-center items-center">
                                <FaRegTrashCan color="#B3B3B3" />
                            </div>
                        </div>
                        <div className="w-1/4 h-[250px] border-solid border-2 border-[#E6E6E6] rounded-[5px] p-[25px] gap-[10px] flex flex-col justify-between items-center gap-[5px] ">
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
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductListPage;