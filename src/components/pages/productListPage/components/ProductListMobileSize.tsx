import { Link, Params, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductListContext } from "../../../siteSetting/SiteSetting";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addBuyCart } from "../../../redux/reducers/buyCart/buyCartReducer";
// import FilterPrice from "./components/filterPrice/FilterPrice";
import MultiRangeSlider from "multi-range-slider-react";
import { useEffect, useState } from "react";
import "./productListMobileSize.css";
import MobileHeader from "../../homePage/components/mobile-header/MobileHeader";
import DesktopHeader from "../../homePage/components/desktopHeader/DesktopHeader";
interface IState {
  id: string | number;
  count: number;
}
function ProductListMobileSize() {
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
      <div className="mobile-product-list  max-w-full h-full pr-[20px] pl-[20px] flex flex-col justify-start items-center">
        <div className="invisible w-full h-[80px] md:hidden"></div>
        <div className="mobile-header w-full h-[80px] fixed top-0 z-[9997]  md:hidden">
          <MobileHeader />
        </div>
        {/* <div className="w-full h-[70px] border-[#E6E6E6] border-t-[2px] rounded-[5px]"> */}
        <div className="h-[100px] fixed bottom-0 right-0 left-0 mt-[10px] mb-[10px] pr-[20px] pl-[20px]  bg-[#E1E6ED] pt-[8px]  pb-[8px]">
          {/* <FilterPrice /> */}
          <div className="pr-[8px]">
            <span>محدوده قیمت</span>
            <span className="text-[12px] pr-[4px]">(تومان)</span>
          </div>
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
                  <Link to={`/product/${item.id}`}>
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
                  </Link>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
    </div>
  );
}
export default ProductListMobileSize;
