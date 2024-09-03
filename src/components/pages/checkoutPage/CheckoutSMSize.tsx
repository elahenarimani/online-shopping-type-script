import { useContext, useEffect, useState } from "react";
import { ProductListContext } from "../../siteSetting/SiteSetting";
import { Link } from "react-router-dom";
import MobileHeader from "../homePage/components/mobile-header/MobileHeader";
import DesktopHeader from "../homePage/components/desktopHeader/DesktopHeader";
import "./checkoutPage.css";
import { BuyCartContext } from "../../siteSetting/SiteSetting";
import { useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import DesktopCheckout from "./components/desktopCheckout/DesktopCheckout";
import DesktopTotalPrice from "./components/desktopTotalPrice/DesktopTotalPrice";
import { useSelector } from "react-redux";
import MobileCheckout from "./components/mobileCheckout/MobileCheckout";
import MobileTotalPrice from "./components/mobileTotalPrice/MobileTotalPrice";
import { MdFavorite } from "react-icons/md";
import { HiMiniShoppingBag } from "react-icons/hi2";
// import DesktopCheckout from "./components/desktopCheckout/DesktopCheckout";

// import { increasCounterInCheckout } from "../../redux/reducers/buyCart/buyCartReducer";

function CheckoutSMSize() {
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
  // interface Idata{
  //     id: number;
  //     headCategory: string;
  //     category: string;
  //     name: string;
  //     price: number;
  //     inStock:number;
  //     image: string[]

  // }

  // let [data, setData] = useState<Idata[]>([]);
  //  data = [
  //     {
  //         id: 1,
  //         headCategory: "زنانه",
  //         category: "بالاپوش",
  //         name: "شومیز آستین بلند زنانه تویین",
  //         price: 500000,
  //         inStock: 15,
  //         image: [
  //             "https://cdn.dsmcdn.com/mnresize/600/-/ty1271/product/media/images/prod/PIM/20240422/12/4a58f620-587d-4863-9e3f-ec0facdc2044/1_org_zoom.jpg",
  //             "https://cdn.dsmcdn.com/mnresize/200/-/ty1271/product/media/images/prod/PIM/20240422/12/380a2c88-1567-4acf-a30b-052a7e69b2f1/1_org_zoom.jpg",
  //             "https://cdn.dsmcdn.com/mnresize/200/-/ty1269/product/media/images/prod/PIM/20240422/12/c8ade9d6-fe93-49f5-a818-253e270e0321/1_org_zoom.jpg"
  //         ]
  //     },
  //     {
  //         id: 2,
  //         headCategory: "زنانه",
  //         category: "بالاپوش",
  //         name: "بلوز آستین حلقه ای زنانه اسمارا ",
  //         price: 399000,
  //         inStock: 15,
  //         image: [
  //             "https://cdn.dsmcdn.com/mnresize/600/-/ty1271/product/media/images/prod/PIM/20240422/12/02ed2c1a-2a3a-401d-9898-b24497dc3d6a/1_org_zoom.jpg",
  //             "https://cdn.dsmcdn.com/mnresize/200/-/ty1271/product/media/images/prod/PIM/20240422/12/d68a0bfb-6806-47d9-8ec6-9d190372ae3b/1_org_zoom.jpg"
  //         ]
  //     },
  //     {
  //         id: 3,
  //         headCategory: "کلاه/روسری/شال",
  //         category: "کلاه",
  //         name: "کلاه جین مردانه ",
  //         price: 250000,
  //         inStock: 20,
  //         image: [
  //             "https://cdn.dsmcdn.com/mnresize/600/-/ty349/product/media/images/20220307/8/63889858/405691405/1/1_org_zoom.jpg",
  //             "https://cdn.dsmcdn.com/mnresize/200/-/ty348/product/media/images/20220307/8/63889858/405691405/2/2_org_zoom.jpg",
  //             "https://cdn.dsmcdn.com/mnresize/200/-/ty348/product/media/images/20220307/8/63889858/405691405/3/3_org_zoom.jpg"
  //         ]
  //     }

  // ]
  // useEffect(() => {
  //     const buyCartId =  buyCarty.map(cartItem => cartItem.id  )
  //     console.log(buyCartId)
  //     const filteredProductList : IProduct[] | undefined = productListX?.productList?.filter(product => buyCartId.includes(product.id))
  //     console.log(filteredProductList)
  // } , [buyCarty, productListX])
  const buyCartId = buyCarty.map((cartItem) => cartItem.id);
  console.log(buyCartId);
  const filteredProductList: IProduct[] | undefined =
    productListX?.productList.filter((product) =>
      buyCartId.includes(product.id)
    );
  console.log(filteredProductList);

  return (
      <div className="mobile-wrapper w-full h-full  ">
      <div className="desktop-wrapper   w-full h-full ">
        <DesktopHeader />
        <div className="favorite-header w-full h-[64px] bg-[#F0F0F0] flex justify-start items-center gap-[10px] pr-[80px]">
          <div className="w-[48px] h-[48px] text-[24px] cursor-pointer   pt-[11px] pb-[11px] pl-[11px] pr-[11px] ">
            <HiMiniShoppingBag color="#A72F3B" />
          </div>
          <div>
            <p>سبد خرید شما</p>
          </div>
        </div>

        <div className="product-detaile-wrapper h-full  max-w-[70%] mt-[16px] ">
          <div className="w-full h-full flex flex-col justify-between items-start gap-[25px]">
            <div className="w-full">
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
                  />
                );
              })}
            </div>
            <div className="w-2/4  ">
              <DesktopTotalPrice filteredProductList={filteredProductList} />
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
export default CheckoutSMSize;