import { Link, Params, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductListContext } from "../../../siteSetting/SiteSetting";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addBuyCart } from "../../../redux/reducers/buyCart/buyCartReducer";
// import FilterPrice from "./components/filterPrice/FilterPrice";
import MultiRangeSlider from "multi-range-slider-react";
import { useEffect, useState } from "react";
import "./incredibleOffersMobile.css";
import MobileHeader from "../../homePage/components/mobile-header/MobileHeader";
import DesktopHeader from "../../homePage/components/desktopHeader/DesktopHeader";
interface IState {
  id: string | number;
  count: number;
}
function IncredibleOffersMobile() {
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
      <div className="mobile-incredible-offers  w-full h-full flex flex-col justify-start items-center">
        <div className="invisible w-full h-[80px] md:hidden"></div>
        <div className="mobile-header w-full h-[80px] fixed top-0 z-[9997]  md:hidden">
          <MobileHeader />
        </div>
        <div className="min-w-[300px] max-w-[600px] h-full grid pl-[10px] pr-[10px] grid-cols-1 gap-[15px] pt-[20px]">
          {productListX?.productList
            .map((item) => {
                return (
                  <Link to={`/product/${item.id}`}>
                  <div key={item.id} className="w-full">
                    <div className="w-full h-full border-solid border-[#E6E6E6] border-[1px] rounded-[5px] flex flex-col justify-start pt-0 mt-0">
                      <div className="w-full ">
                        <img
                          src={item.image[0]}
                          alt="photos"
                          className="w-full h-[220px] object-contain rounded-[5px] "
                        />
                      </div>
                      <div className="w-full h-full flex flex-col justify-start items-stretch pr-[20px] pl-[20px] pt-[10px] pb-[10px]  gap-[8px]">
                        <p className=" text-[12px] shrink basis-[33px] overflow-hidden text-ellipsis line-clamp-2 ">
                          {item.name}
                        </p>
                        <div className="w-full flex flex-row justify-between items-center">
                          <div className="w-[40px] h-[20px] bg-[#A72F3B] rounded-[15px] pl-[4px] pr-[4px] pt-[3px] pb-[3px] text-white text-[12px]  white-space">
                            <p>25%</p>
                          </div>
                          <div className="w-full text-left">
                            <span>{(25 / 100) * item.price}</span>
                            <span className=" text-[12px]">تومان</span>
                          </div>
                        </div>
                        <div className="w-full h-full flex flex-row justify-end items-center text-[12px] pl-[20px]">
                          <p className="line-through"> {item.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                );
            })}
        </div>
      </div>
    </div>
  );
}
export default IncredibleOffersMobile;
