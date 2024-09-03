import { useContext, useEffect, useState } from "react";
import { ProductListContext } from "../../siteSetting/SiteSetting";
import { Link } from "react-router-dom";
import MobileHeader from "../homePage/components/mobile-header/MobileHeader";
import DesktopHeader from "../homePage/components/desktopHeader/DesktopHeader";
import "./checkoutPage.css";
import { BuyCartContext } from "../../siteSetting/SiteSetting";
import DesktopCheckout from "./components/desktopCheckout/DesktopCheckout";
import DesktopTotalPrice from "./components/desktopTotalPrice/DesktopTotalPrice";
import { useSelector } from "react-redux";
import MobileCheckout from "./components/mobileCheckout/MobileCheckout";
import MobileTotalPrice from "./components/mobileTotalPrice/MobileTotalPrice";
import { MdFavorite } from "react-icons/md";
import { HiMiniShoppingBag } from "react-icons/hi2";
import CheckoutSMSize from "./CheckoutSMSize";
function CheckoutPage() {
  const productListX = useContext(ProductListContext);
  let buyCartX = useContext(BuyCartContext);
  interface IState {
    id: string | number;
    count: number;
  }
  const buyCarty: IState[] = useSelector((state: any) => state.buyCarty);
  interface IProduct {
    id: string | number;
    headcategory: string;
    category: string;
    name: string;
    price: number;
    instock: number;
    image: string[];
  }
  interface IProductList {
    productList?: IProduct[];
    setProductList?: Function;
  }
  const buyCartId = buyCarty.map((cartItem) => cartItem.id);
  console.log(buyCartId);
  const filteredProductList: IProduct[] | undefined =
    productListX?.productList.filter((product) =>
      buyCartId.includes(product.id)
    );
  console.log(filteredProductList);
  return (
    <div>
      <div className="mobile-wrapper w-full h-full  sm:hidden">
        <div className="invisible w-full h-[144px] sm:hidden"></div>
        <div className="mobile-header w-full h-[80px] fixed top-0 z-[9997]  sm:hidden">
          <MobileHeader />

          {/* <div className="mobile-product-list w-full h-full  sm:hidden">
            <ProductListMobileSize />
          </div> */}

          {/* <div className="desktop-product-list w-full h-full hidden lg:block"></div> */}

          <div className="bascket-header w-full h-[64px] bg-[#F0F0F0] flex justify-start items-center gap-[10px] pr-[16px]">
            <div className="w-[48px] h-[48px] text-[24px] cursor-pointer   pt-[11px] pb-[11px] pl-[11px] pr-[11px] ">
              <HiMiniShoppingBag color="#A72F3B" />
            </div>
            <div>
              <p>سبد خرید شما</p>
            </div>
          </div>
        </div>
        <div className="w-full p-[15px] flex flex-col justify-between gap-[10px] mt-[8px]">
          {filteredProductList?.map((item) => {
            const cartItem = buyCarty.find((cart) => cart.id == item.id);
            const count = cartItem ? cartItem.count : 0;
            return (
              <MobileCheckout
                key={item.id}
                id={item.id}
                headCategory={item.headcategory}
                category={item.category}
                name={item.name}
                price={item.price}
                image={item.image}
                inStock={item.instock}
                count={count}
              />
            );
          })}
          <div>
            <MobileTotalPrice filteredProductList={undefined} />
          </div>
        </div>
      </div>
      <div className="sm-checkout w-full h-full hidden sm:block lg:hidden">
        <CheckoutSMSize />
      </div>
      <div className="desktop-wrapper hidden lg:block  w-full h-full ">
        <DesktopHeader />
        <div className="favorite-header w-full h-[64px] bg-[#F0F0F0] flex justify-start items-center gap-[10px] pr-[80px]">
          <div className="w-[48px] h-[48px] text-[24px] cursor-pointer   pt-[11px] pb-[11px] pl-[11px] pr-[11px] ">
            <HiMiniShoppingBag color="#A72F3B" />
          </div>
          <div>
            <p>سبد خرید شما</p>
          </div>
        </div>

        <div className="product-detaile-wrapper h-screen  max-w-11/12 mt-[16px] ">
          <div className="w-full h-full flex flex-row justify-between items-start gap-[25px]">
            <div className="w-3/4">
              {filteredProductList?.map((item) => {
                const cartItem = buyCarty.find((cart) => cart.id == item.id);
                const count = cartItem ? cartItem.count : 0;

                return (
                  <DesktopCheckout
                    key={item.id}
                    id={item.id}
                    headCategory={item.headcategory}
                    category={item.category}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    inStock={item.instock}
                    count={count}
                    //             "id": "5",
                    // "head_category": "آفتابی عینک",
                    // "category": "زنانه",
                    // "name": "عینک قهوه ای طرح پلیان",
                    // "price": 5000000,
                    // "in_stock": 10,
                    // "image": [
                    //   "https://cdn.dsmcdn.com/mnresize/600/-/ty68/product/media/images/20210327/18/75712859/81415201/1/1_org_zoom.jpg",
                    //   "https://cdn.dsmcdn.com/mnresize/200/-/ty44/product/media/images/20210327/18/75712859/81415201/4/4_org_zoom.jpg",
                    //   "https://cdn.dsmcdn.com/mnresize/200/-/ty75/product/media/images/20210327/18/75712859/81415201/3/3_org_zoom.jpg"
                    // ]
                  />
                );
              })}
            </div>
            <div className="w-1/4  ">
              <DesktopTotalPrice filteredProductList={filteredProductList} />
            </div>
            {/* <div className="w-1/4 h-[250px] border-solid border-2 border-[#E6E6E6] rounded-[5px] p-[25px] gap-[10px] flex flex-col justify-between items-center gap-[5px] ">
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
                    </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutPage;
