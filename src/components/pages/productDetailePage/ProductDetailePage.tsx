import { GrFavorite } from "react-icons/gr";
import { GoShareAndroid } from "react-icons/go";
import { useContext, useState } from "react";
import { ProductListContext } from "../../siteSetting/SiteSetting";
import { BuyCartContext } from "../../siteSetting/SiteSetting";
import { Outlet, useParams } from "react-router-dom";
import MobileHeader from "../../mobile-header/MobileHeader";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./productDetailePage.css";
import { Navigation, Pagination } from "swiper/modules";
import { TbBus, TbRewindBackward15 } from "react-icons/tb";
import DesktopHeader from "../homePage/components/desktopHeader/DesktopHeader";
import { BsShieldCheck } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import Button from "../../button/Button";
import {FavoritProductContext} from "../../siteSetting/SiteSetting"
// import { addBuyCart } from "../../../redux/reducers/buyCart/buyCartReducer";
import { addBuyCart } from "../../redux/reducers/buyCart/buyCartReducer";
// import {addToFavorite} from "../../redux/reducers/favoriteProduct/FavoriteProduct"
import {
  increasCounter,
  decreaseCounter,
} from "../../redux/reducers/buyCart/buyCartReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useSwiper } from "swiper/react";

import { Controller } from "swiper/modules";
import { Scrollbar, A11y } from "swiper/modules";
import SwiperCore, { Swiper as SwiperType } from "swiper";
import { register } from "swiper/element/bundle";
import { addToFavorite } from "../../redux/reducers/favoriteProduct/FavoriteProduct";
import { removeFromFavorite} from "../../redux/reducers/favoriteProduct/FavoriteProduct"

SwiperCore.use([Navigation, Pagination]);
interface IProduct {
  id: string;
  head_category: string;
  category: string;
  name: string;
  price: number;
  in_stock: number;
  image: string[];
}
interface IState {
  id: string | number;
  count: number;
}
interface IFavProduct {
  id: string;
  flag : boolean
}
function ProductDetailePage() {
  const favoritProductX = useContext(FavoritProductContext) 
  const fullReduxState = useSelector((state) => state);
  // const count = useSelector((state: any) => state.buyCart.count);
  // const buyCart = useSelector((state: any) => state.buyCart);
  const buyCarty: IState[] = useSelector((state: any) => state.buyCarty);
  const favoritProduct:IFavProduct[] = useSelector((state:any) => state.favoritProduct)
  // const x = useSelector((state: any) => console.log(state.buyCarty));
  const productListX = useContext(ProductListContext);
  let buyCartX = useContext(BuyCartContext);
  const params = useParams();
  const dispatch: Function = useDispatch();
  let [counter, setCounter] = useState<number>(0);
  // function increasCounter() {
  //     setCounter(counter += 1)
  //     return counter
  // }
  const currentItem = buyCarty.find((item) => item.id === params.id);
  // const count = currentItem.count
  const count = currentItem ? currentItem.count : 0;
  console.log(buyCarty);
  function findParms() {
    const finderParams = params.id;
    return finderParams;
  }
  // const [isFavorite, setIsFavorite] = useState(false);
  // useEffect(() => {
  //   const productExists = favoritProduct.some(product => product.id === productId);
  //   setIsFavorite(productExists);
  // }, [favoritProduct, id]);
  // const isFavorit =  favoritProduct.some(product => product.id === productId)
  const isFavorite =  favoritProduct.some(product => product.id === params.id)
function handleFavoriteClick(productId:string |undefined){
  const isFavorite =  favoritProduct.some(product => product.id === productId)
 console.log(isFavorite)
if (isFavorite) {
  dispatch(removeFromFavorite({ id: productId }));
} else {
  dispatch(addToFavorite({ id: productId }));
}

}
  return (
    <div>
      {/* {console.log(fullReduxState)} */}
      {/* {console.log(params.id)} */}
      {/* {console.log(buyCarty)} */}
      {console.log(favoritProduct)}
      <div className="w-full h-full md:hidden">
        <div className="invisible w-full h-[80px] md:hidden"></div>
        <div className="mobile-header w-full h-[80px] fixed top-0 z-[9997]  md:hidden">
          <MobileHeader />
        </div>
        <div >
          <Swiper
          //  pagination={true} modules={[Pagination]} className="mySwiper"
          modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
          spaceBetween={5}
          slidesPerView={1}
          loop={true}
          effect="fade"
          navigation={true}
          // pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          className="swiper-container-4 w-full h-full "
           >
            <SwiperSlide>
              <div className="w-full swiper-slide">
                <img
                  alt={`${
                    productListX?.productList.find(
                      (item) => item?.id === params.id
                    )?.name ?? "photos"
                  }`}
                  src={
                    productListX?.productList.find(
                      (item) => item?.id === params.id
                    )?.image[0]
                  }
                  className="w-full h-full"
                  //  alt="photos"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <img
                  alt={`${
                    productListX?.productList.find(
                      (item) => item?.id === params.id
                    )?.name ?? "photo"
                  }`}
                  src={
                    productListX?.productList.find(
                      (item) => item?.id === params.id
                    )?.image[1]
                  }
                  className="w-full h-full"
                  // alt="photos"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <img
                  alt={`${
                    productListX?.productList.find(
                      (item) => item?.id == params.id
                    )?.name ?? "photos"
                  }`}
                  src={
                    productListX?.productList.find(
                      (item) => item?.id === params.id
                    )?.image[2]
                  }
                  className="w-full h-full"
                  //  alt="photos"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="swiper-pagination"></div>
        <div className="text-[14px] pt-[5px] pl-[16px] pr-[16px]">
          <p>مردانه / بالاپوش /تیشرت</p>
        </div>
        <div className="flex w-full flex-row justify-between items-center pl-[16px] pr-[16px] mt-[15px] mb-[15px]">
          <div>
            <p className="   text-right text-[19px] font-medium ">
              {
                productListX?.productList.find((item) => item?.id === params.id)
                  ?.name
              }
            </p>
          </div>
          <div className="flex  flex-row justify-between items-center text-[19px] ">
            <p>
              {
                productListX?.productList.find((item) => item?.id === params.id)
                  ?.price
              }
            </p>
            <p>تومان</p>
          </div>
        </div>
        <div className="w-full h-full flex flex-row justify-between items-center mt-[15px] mb-[15px] pl-[16px] pr-[16px]">
          <div className="w-full flex flex-row justify-start items-center gap-[8px] ">
            <p className="w-[50px] important!">تعداد:</p>
            <button
              className="w-[20px] h-[20px]"
              onClick={() => dispatch(increasCounter({ id: params.id }))}
            >
              <p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white ">
                <FaPlus size={15} />
              </p>
            </button>
            <p className="w-[20px] flex justify-center items-center">
              {count > 0 ? count : 0}
            </p>
            <button
              className={`w-[20px] h-[20px] rounded-[50%] ${
                count > 0
                  ? "bg-[#A72F3B] rounded-[50%]"
                  : "opacity-50 rounded-[50%]"
              }`}
              disabled={count === 0}
              onClick={() => dispatch(decreaseCounter({ id: params.id }))}
            >
              <p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white ">
                <FiMinus size={15} />
              </p>
            </button>
          </div>
          <div className=" h-[40px] flex justify-end items-center  gap-[20px]">
            <div className="text-[24px] ">
              <GoShareAndroid color="#A72F3B" />
            </div>
            <div className="text-[24px] ">
              <IoMdHeartEmpty color="#A72F3B" />
            </div>
          </div>
        </div>
        <div className="invisible w-full h-[53px]"></div>
        <Link to={`/checkout/cart/`}>
          <Button
            className="w-full h-[53px]  fixed bottom-0 z-10 bg-[#A72F3B] text-white pt-[12px] pb-[12px] text-center"
            onClickHandler={() => dispatch(addBuyCart(console.log("hi")))}
          >
            <p>رفتن به سبد خرید</p>
          </Button>
        </Link>
      </div>
      <div className="w-full h-full hidden md:block">
        <DesktopHeader />
        <div className="product-detaile-wrapper h-screen">
          <p>زنانه/بالاپوش/تیشرت</p>
          <div className="w-full h-full flex flex-row justify-start items-start gap-[80px] ">
            <div className="w-1/3 h-full ">
              <Swiper
                // navigation={true}
                // modules={[Navigation]}
                // className="mySwiper"
                modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
                spaceBetween={5}
                slidesPerView={1}
                loop={true}
                // effect="fade"
                navigation={true}
                // pagination={{ clickable: true }}
                onSlideChange={() => console.log("slide change")}
                className="swiper-container-3 w-full h-full "
              >
                <SwiperSlide className="w-full h-full">
                  <div className="swiper-slide2">
                    <img
                      className="w-full h-full"
                      src={
                        productListX?.productList.find(
                          (item) => item?.id === params.id
                        )?.image[0]
                      }
                      alt={`${
                        productListX?.productList.find(
                          (item) => item?.id === params.id
                        )?.name ?? "photo"
                      }`}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="w-full h-full">
                  <div className="swiper-slide2">
                    <img
                      className="w-full h-full"
                      src={
                        productListX?.productList.find(
                          (item) => item?.id === params.id
                        )?.image[1]
                      }
                      alt={`${
                        productListX?.productList.find(
                          (item) => item?.id === params.id
                        )?.name ?? "photo"
                      }`}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="w-full h-full">
                  <div className="swiper-slide2 ">
                    <img
                      className="w-full h-full"
                      src={
                        productListX?.productList.find(
                          (item) => item?.id === params.id
                        )?.image[2]
                      }
                      alt={`${
                        productListX?.productList.find(
                          (item) => item?.id === params.id
                        )?.name ?? "photo"
                      }`}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-1/3  h-full flex flex-col justify-between items-start  ">
              {/* <div className="flex flex-col judsify-between items-center"> */}
              <div className="w-full text-[24px] cursor-pointer flex justify-end">
                <GoShareAndroid color="#A72F3B" />
              </div>
              <div className="text-[20px]">
                {
                  productListX?.productList.find(
                    (item) => item?.id === params.id
                  )?.name
                }
              </div>
              {/* </div> */}
              <div className="w-full flex flex-row justify-between items-center">
                <div>
                  <p className="text-[14px] text-[#9B9B9B]">فروشنده: کاستومی</p>
                </div>
                <div className="flex  flex-row justify-between items-center text-[28px] ">
                  <p>
                    {
                      productListX?.productList.find(
                        (item) => item?.id === params.id
                      )?.price
                    }
                  </p>
                  <p>تومان</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-start itwms-center gap-[10px] text-[#9B9B9B]">
                  <div className="cursor-pointer">
                    <TbBus />
                  </div>
                  <div className=" text-[12px]">آماده ارسال</div>
                </div>
                <div className="flex flex-row justify-start items-center gap-[10px] text-[#9B9B9B]">
                  <div className=" cursor-pointer">
                    <BsShieldCheck />
                  </div>
                  <div className=" text-[12px]">
                    گارانتی اسالت سلامت فیزیکی کالا
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-row justify-start items-center gap-[8px] ">
                <p className="w-[50px] important!">تعداد:</p>
                {/* <button className="w-[20px] h-[20px]" onClick={() => increasCounter()}><p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white "><FaPlus size={15} /></p></button> */}
                <button
                  className="w-[20px] h-[20px]"
                  onClick={() => dispatch(increasCounter({ id: params.id }))}
                >
                  <p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white ">
                    <FaPlus size={15} />
                  </p>
                </button>
                <p className="w-[20px] flex justify-center items-center ">
                  {count > 0 ? count : 0}
                </p>
                <button
                  className={`w-[20px] h-[20px] rounded-[50%] ${
                    count > 0
                      ? "bg-[#A72F3B] rounded-[50%]"
                      : "opacity-50 rounded-[50%]"
                  }`}
                  disabled={count === 0}
                  onClick={() => dispatch(decreaseCounter({ id: params.id }))}
                >
                  <p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white ">
                    <FiMinus size={15} />
                  </p>
                </button>
              </div>
              {/* <div className="w-full flex flex-row justify-start items-center gap-[8px] ">
                                <p className="w-[50px] important!">تعداد:</p>
                                <button className="w-[20px] h-[20px]" onClick={() => increasCounter(params.id)}><p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white "><FaPlus size={15} /></p></button>
                                <p className="w-[20px] flex justify-center items-center">{params.id && (buyCartX?.buyCart.find(item => item.productId == +(params?.id ?? ""))?.count ?? 0)}</p>
                                <button className={`w-[20px] h-[20px] rounded-[50%] ${(buyCartX?.buyCart.find(product => product?.productId == +(params?.id ?? ""))?.count ?? 0) > 0 ? 'bg-[#A72F3B] rounded-[50%]' : 'opacity-50 rounded-[50%]'}`}
                                    disabled={buyCartX?.buyCart.find(product => product?.productId == +(params?.id ?? ""))?.count == 0}
                                    onClick={() => removeFromBuyCart(params.id)}>
                                    <p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white "><FiMinus size={15} /></p>
                                </button>
                            </div> */}
              <div className="h-[48px]"></div>
              <div className="w-full flex flex-row justify-between items-center gap-[20px]">
                <div className="w-11/12">
                  <Link to={`/checkout/cart/`}>
                    <button
                      className=" w-full h-[48px]  text-white bg-[#A72F3B] text-center pt-[11px] pb-[11px] rounded-[5px] "
                      onClick={() => dispatch(addBuyCart({ id: params.id }))}
                    >
                      <p>رفتن به سبد خرید</p>
                    </button>
                  </Link>
                </div>
                <div className="w-[48px] h-[48px] text-[24px] cursor-pointer border-[1px] border-[#A72F3B] text-center pt-[11px] pb-[11px] pl-[11px] pr-[11px] rounded-[5px]"
                      onClick={() => handleFavoriteClick( params.id)}
                      >
                        {isFavorite ? <MdFavorite color="#A72F3B"/> : <MdFavoriteBorder color="#A72F3B" />}
                  
                </div>
              </div>
              <div className="advantages w-full h-[150px] pt-[15px] pb-[15px] flex justify-center items-center gap-[15px] pr-[16px] pl-[16px]">
                <div className="w-full  flex flex-col justify-between items-center cursor-pointer text-[#9B9B9B]">
                  <div className="w-[56px] h-[56px] mb-[24px]">
                    <LiaShippingFastSolid className="w-full h-full " />
                  </div>
                  <div>
                    <p className="text-[12px] pt-[5px]">تحویل سریع و ارزان</p>
                  </div>
                </div>
                <div className="w-full  flex flex-col justify-between items-center cursor-pointer text-[#9B9B9B]">
                  <div className="w-[56px] h-[56px] mb-[24px]">
                    <TbRewindBackward15 className="w-full h-full" />
                  </div>
                  <div>
                    <p className="text-[12px] pt-[5px]"> ضمانت بازگشت کالا</p>
                  </div>
                </div>
                <div className="w-full  flex flex-col justify-between items-center cursor-pointer text-[#9B9B9B]">
                  <div className="w-[56px] h-[56px] mb-[24px]">
                    <IoBagCheckOutline className="w-full h-full" />
                  </div>
                  <div>
                    <p className="text-[12px] pt-[5px]">کالای اورجینال</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailePage;
