import { useContext } from "react";
import { useSelector } from "react-redux";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { ProductListContext } from "../../siteSetting/SiteSetting";
import MobileHeader from "../homePage/components/mobile-header/MobileHeader";
import DesktopHeader from "../homePage/components/desktopHeader/DesktopHeader";
import "./checkoutPage.css";
import DesktopCheckout from "./components/desktopCheckout/DesktopCheckout";
import DesktopTotalPrice from "./components/desktopTotalPrice/DesktopTotalPrice";
import MobileCheckout from "./components/mobileCheckout/MobileCheckout";
import MobileTotalPrice from "./components/mobileTotalPrice/MobileTotalPrice";
import CheckoutSMSize from "./CheckoutSMSize";
function CheckoutPage() {
  const productListX = useContext(ProductListContext);
  const buyCarty: IState[] = useSelector((state: any) => state.buyCarty);
  const buyCartId = buyCarty.map((cartItem) => cartItem.id);
  console.log(buyCartId);
  const filteredProductList: IProduct[] | undefined =
    productListX?.productList.filter((product) =>
      buyCartId.includes(product.id)
    );
  console.log(filteredProductList);
  interface IState {
    id: string | number;
    count: number;
  }
  interface IProduct {
    id: string | number;
    headcategory: string;
    category: string;
    name: string;
    price: number;
    instock: number;
    image: string[];
  }
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutPage;
