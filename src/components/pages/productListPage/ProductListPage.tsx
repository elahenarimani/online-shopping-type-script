// import { Link, Params, useParams } from "react-router-dom";
// import { useContext } from "react";
// import { ProductListContext } from "../../siteSetting/SiteSetting";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { useDispatch, useSelector } from "react-redux";
// import { addBuyCart } from "../../redux/reducers/buyCart/buyCartReducer";
// // import FilterPrice from "./components/filterPrice/FilterPrice";
// import MultiRangeSlider from "multi-range-slider-react";
// import { useEffect, useState } from "react";
// import "./productListPage.css";
// import MobileHeader from "../../mobile-header/MobileHeader";
// import DesktopHeader from "../homePage/components/desktopHeader/DesktopHeader";

// interface IState {
//   id: string | number;
//   count: number;
// }
// function ProductListPage() {
//   const productListX = useContext(ProductListContext);
//   // const [minValue, set_minValue] = useState(0);
//   // const [maxValue, set_maxValue] = useState(15000000);
//   // const [filteredPriceProducts, setFilteredPriceProducts] = useState<
//   //   IProduct[] | undefined
//   // >([]);
//   const buyCarty: IState[] = useSelector((state: any) => state.buyCarty);
//   const params = useParams<Params>();
//   const filteredProducts = productListX?.productList.filter(
//     (product) => product.head_category === params.headcategory
//   );
//   // const dispatch: Function = useDispatch();
//   // const handleInput = (e: any) => {
//   //   set_maxValue(e.maxValue);
//   //   set_minValue(e.minValue);
//   // };
//   interface IProduct {
//     id: string;
//     head_category: string;
//     category: string;
//     name: string;
//     price: number;
//     in_stock: number;
//     image: string[];
//   }
//   interface IProductList {
//     productList?: IProduct[];
//     setProductList?: Function;
//   }
//   // useEffect(() => {
//   //   const filtered: IProduct[] | undefined = productListX?.productList?.filter(
//   //     (product) => product.price >= minValue && product.price <= maxValue
//   //   );
//   //   setFilteredPriceProducts(filtered);
//   // }, [minValue, maxValue, productListX]);
//   return (

//     <div>
//        {console.log(filteredProducts)}
//       <div className="mobile-product-list lg:hidden max-w-full h-full pr-[20px] pl-[20px] flex flex-col justify-start items-center">
//         <div className="invisible w-full h-[80px] md:hidden"></div>
//         <div className="mobile-header w-full h-[80px] fixed top-0 z-[9997]  md:hidden">
//           <MobileHeader />
//         </div>
//         {/* <div className="w-full h-[70px] border-[#E6E6E6] border-t-[2px] rounded-[5px]"> */}
//         <div className="h-[70px] fixed bottom-[1px] right-[5px] left-[5px] mt-[10px] mb-[10px] pr-[20px] pl-[20px]  bg-white ">
//           {/* <FilterPrice/> */}
//           <MultiRangeSlider
//             min={0}
//             max={15000000}
//             step={500000}
//             minValue={minValue}
//             maxValue={maxValue}
//             onInput={(e) => {
//               handleInput(e);
//             }}
//           />
//           <div className="max-w-full   flex justify-between items-center ">
//             <p>{maxValue}</p>
//             <p>{minValue}</p>
//           </div>
//         </div>
//         {/* </div> */}
//         <div className="max-w-full h-full grid  grid-cols-1 gap-[15px] pt-[20px]">
//           {filteredProducts
//             ?.filter(
//               (product) =>
//                 product.price >= minValue && product.price <= maxValue
//             )
//             ?.map((item) => (
//               <Link to={`/checkout/cart/`}>
//                 <div key={item.id} className=" w-full">
//                   <div className="w-full  border-solid border-[#E6E6E6] border-[2px] rounded-[5px]  flex flex-col">
//                     <img
//                       src={item.image[0]}
//                       alt="photo"
//                       className="w-full h-full"
//                     />
//                     <p className="mr-[10px] mb-[10px] mt-[12px]">{item.name}</p>
//                     <p className="mr-[10px]  mb-[25px] mt-[5px]">
//                       {item.price} تومان
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//         </div>
//       </div>
//       <div className="desktop-product-list w-full h-full hidden lg:block">
//         <DesktopHeader />
//         <div className=" flex max-w-full h-full m-auto ml-[40px] mr-[40px]  justify-start items-start gap-[5px]">
//           <div className="max-w-[200px] min-w-[200px] mr-[20px] ml-[20px] pt-[80px]">
//             {/* <MultiRangeSlider
//               min={0}
//               max={15000000}
//               step={500000}
//               minValue={minValue}
//               maxValue={maxValue}
//               onInput={(e) => {
//                 handleInput(e);
//               }} */}

//             {/* <div className="flex justify-between items-center ">
//               <p>{maxValue}</p>
//               <p>{minValue}</p>
//             </div> */}
//           </div>
//           <div className="w-9/12 grid  grid-cols-4 gap-[15px]">
//              {/* {filteredProducts
//               ?.filter(
//                 (product) =>
//                   product.price >= minValue && product.price <= maxValue
//               )
//               ?.map((item) =>  */}
//                     {/* <div key={item.id} className=" w-full"> */}

//                       <div className="w-full  border-solid border-[#E6E6E6] border-[2px] rounded-[5px]  flex flex-col">
//                         <img
//                           // src={item.image[0]}
//                           // src={item.image[0]}
//                           alt="photo"
//                           className="w-full h-full"
//                         />
//                         <p className="mr-[10px] mb-[10px] mt-[25px]">
//                           name
//                         </p>
//                         <p className="mr-[10px]  mb-[25px] mt-[10px]">
//                           price تومان
//                         </p>
//                       </div>
//                     {/* </div> */}

//                   {/* ) }  */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default ProductListPage;

import { Link, Params, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductListContext } from "../../siteSetting/SiteSetting";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addBuyCart } from "../../redux/reducers/buyCart/buyCartReducer";
// import FilterPrice from "./components/filterPrice/FilterPrice";
import MultiRangeSlider from "multi-range-slider-react";
import { useEffect, useState } from "react";
import "./productListPage.css";
import MobileHeader from "../homePage/components/mobile-header/MobileHeader";
import DesktopHeader from "../homePage/components/desktopHeader/DesktopHeader";
import ProductListMobileSize from "./components/ProductListMobileSize";
import ProductListSMSize from "./components/ProductListSMSize";
interface IState {
  id: string | number;
  count: number;
}
function ProductListPage() {
  const productListX = useContext(ProductListContext);
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(15000000);
  const [filteredPriceProducts, setFilteredPriceProducts] = useState<
    IProduct[] | undefined
  >([]);
  const buyCarty: IState[] = useSelector((state: any) => state.buyCarty);
  const params = useParams();
  const dispatch: Function = useDispatch();
  const handleInput = (e: any) => {
    set_maxValue(e.maxValue);
    set_minValue(e.minValue);
  };
  interface IProduct {
    id: string;
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
  useEffect(() => {
    const filtered: IProduct[] | undefined = productListX?.productList?.filter(
      (product) => product.price >= minValue && product.price <= maxValue
    );
    setFilteredPriceProducts(filtered);
  }, [minValue, maxValue, productListX]);
  return (
    <div>
{/* 
<div className="mobile-favorite-list w-full h-full  sm:hidden">
        <FavoriteItemMobileSize/>
      </div>
      <div className="sm-favorite-list w-full h-full hidden sm:block lg:hidden">
      <FavoriteItemMDSize/>
      </div>
      <div className="desktop-favorite-list w-full h-full hidden lg:block">
        <DesktopHeader /> */}


      <div className="mobile-product-list w-full h-full  sm:hidden">
        <ProductListMobileSize/>
      </div>
      <div className="sm-product-list w-full h-full hidden sm:block lg:hidden">
      <ProductListSMSize/>
      </div>
      <div className="desktop-product-list w-full h-full hidden lg:block"></div>


      {/* <div className="mobile-product-list lg:hidden max-w-full h-full pr-[20px] pl-[20px] flex flex-col justify-start items-center">
        <div className="invisible w-full h-[80px] md:hidden"></div>
        <div className="mobile-header w-full h-[80px] fixed top-0 z-[9997]  md:hidden">
          <MobileHeader />
        </div>
       
        <div className="h-[70px] fixed bottom-[1px] right-[5px] left-[5px] mt-[10px] mb-[10px] pr-[20px] pl-[20px]  bg-white ">
          
          <MultiRangeSlider
            min={0}
            max={15000000}
            step={500000}
            minValue={minValue}
            maxValue={maxValue}
            onInput={(e) => {
              handleInput(e);
            }}
          />
          <div className="max-w-full   flex justify-between items-center ">
            <p>{maxValue}</p>
            <p>{minValue}</p>
          </div>
        </div>
        <div className="max-w-full h-full grid  grid-cols-1 gap-[15px] pt-[20px]">
          {productListX?.productList
            .filter(
              (product) =>
                product.price >= minValue && product.price <= maxValue
            )
            .map((item) => {
              if (item.headcategory === params.headcategory) {
                return (
                  <div key={item.id} className=" w-full">
                    <div className="w-full  border-solid border-[#E6E6E6] border-[2px] rounded-[5px]  flex flex-col">
                      <img
                        src={item.image[0]}
                        alt="photos"
                        className="w-full h-full"
                      />
                      <p className="mr-[10px] mb-[10px] mt-[12px]">
                        {item.name}
                      </p>
                      <p className="mr-[10px]  mb-[25px] mt-[5px]">
                        {item.price} تومان
                      </p>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div> */}






      <div className="desktop-product-list w-full h-full hidden lg:block">
        <DesktopHeader />
        <div className=" flex max-w-full h-full m-auto ml-[40px] mr-[40px]  justify-start items-start gap-[5px]">
          <div className="max-w-[200px] min-w-[200px] mr-[20px] ml-[20px] pt-[80px]">
            <MultiRangeSlider
              min={0}
              max={15000000}
              step={500000}
              minValue={minValue}
              maxValue={maxValue}
              onInput={(e) => {
                handleInput(e);
              }}
            />
            <div className="flex justify-between items-center ">
              <p>{maxValue}</p>
              <p>{minValue}</p>
            </div>
          </div>
          <div className="w-9/12 grid  grid-cols-4 gap-[15px]">
            {productListX?.productList
              .filter(
                (product) =>
                  product.price >= minValue && product.price <= maxValue
              )
              .map((item) => {
                if (item.headcategory === params.headcategory) {
                  return (
                    <div key={item.id} className="w-full">
                      <div className="w-full h-full border-solid border-[#E6E6E6] border-[2px] rounded-[5px] flex flex-col justify-start pt-0 mt-0">
                        <div className="w-full h-full">
                          <img
                            src={item.image[0]}
                            alt="photos"
                            className="w-full h-full  "
                          />
                        </div>
                        <p className="mr-[10px] mb-[10px] mt-[25px] text-[11px]">
                          {item.name}
                        </p>
                        <p className="mr-[10px]  mb-[25px] mt-[10px] text-[11px]">
                          {item.price}تومان
                        </p>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductListPage;
