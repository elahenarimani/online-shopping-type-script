import { Link, Params, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductListContext } from "../../../siteSetting/SiteSetting";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addBuyCart } from "../../../redux/reducers/buyCart/buyCartReducer";
import MultiRangeSlider from "multi-range-slider-react";
import { useEffect, useState } from "react";
import "./productListSMSize.css";
import MobileHeader from "../../homePage/components/mobile-header/MobileHeader";
import DesktopHeader from "../../homePage/components/desktopHeader/DesktopHeader";
interface IState {
  id: string | number;
  count: number;
}
function ProductListSMSize() {
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
      {/* <div className="desktop-favorite-list w-full h-full hidden lg:block"></div> */}
      <div className="desktop-product-list w-full h-full hidden sm:block">
        <DesktopHeader />
        <div className=" flex max-w-full h-full m-auto ml-[40px] mr-[40px]  justify-start items-start gap-[5px]">
          <div className="max-w-[170px] min-w-[170px] mr-[20px] ml-[20px] pt-[80px]">
          <div className="pr-[15px]">
            <span>محدوده قیمت</span>
            <span className="text-[12px] pr-[8px]">(تومان)</span>
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
            <div className="flex justify-between items-center ">
              <p>{maxValue}</p>
              <p>{minValue}</p>
            </div>
          </div>
          <div className="w-9/12 grid  grid-cols-3 gap-[15px]">
            {productListX?.productList
              .filter(
                (product) =>
                  product.price >= minValue && product.price <= maxValue
              )
              .map((item) => {
                if (item.headcategory === params.headcategory) {
                  return (
                    <Link to={`/product/${item.id}`}>
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
                    </Link>
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
export default ProductListSMSize;
