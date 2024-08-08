import { Link, Params, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductListContext } from "../../siteSetting/SiteSetting";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addBuyCart } from "../../redux/reducers/buyCart/buyCartReducer";
import FilterPrice from "./components/filterPrice/FilterPrice";
import MultiRangeSlider from "multi-range-slider-react";
import { useEffect, useState } from "react";
import "./productListPage.css";
interface IState {
  id: string | number;
  count: number;
}
function ProductListPage() {
  const { categoryName } = useParams<Params>();
  const productListX = useContext(ProductListContext);
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(15000000);
  const [filteredPriceProducts, setFilteredPriceProducts] = useState<
    IProduct[] | undefined
  >([]);
  const buyCarty: IState[] = useSelector((state: any) => state.buyCarty);
  const params = useParams();
  const filteredProducts = productListX?.productList.filter(
    (product) => product.head_category === categoryName
  );
  const dispatch: Function = useDispatch();
  const handleInput = (e: any) => {
    set_maxValue(e.maxValue);
    set_minValue(e.minValue);
  };
  interface IProduct {
    id: string;
    head_category: string;
    category: string;
    name: string;
    price: number;
    in_stock: number;
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
      <div className="mobile-product-list lg:hidden max-w-full h-full pr-[20px] pl-[20px] flex flex-col justify-start items-center">
        <div className="w-full h-[70px] border-[#E6E6E6] border-t-[2px] rounded-[5px]">
          <div className="h-[70px] fixed bottom-[1px] right-[5px] left-[5px] pt-[5px] pr-[20px] pl-[20px]  bg-white ">
          {/* <FilterPrice/> */}
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
          </div>
        <div className="max-w-full h-full grid  grid-cols-1 gap-[15px] pt-[20px]">
          {filteredProducts
            ?.filter(
              (product) =>
                product.price >= minValue && product.price <= maxValue
            )
            ?.map((item) => (
              <Link to={`/checkout/cart/`}>
                <div key={item.id} className=" w-full">
                  <div className="w-full  border-solid border-[#E6E6E6] border-[2px] rounded-[5px]  flex flex-col">
                    <img
                      src={item.image[0]}
                      alt="photo"
                      className="w-full h-full"
                    />
                    <p className="mr-[10px] mb-[10px] mt-[12px]">{item.name}</p>
                    <p className="mr-[10px]  mb-[25px] mt-[5px]">
                      {item.price} تومان
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className="desktop-product-list hidden lg:flex max-w-full h-full m-auto ml-[40px] mr-[40px]  justify-start items-start gap-[5px]">
        <div className="max-w-[200px] min-w-[200px] mr-[20px] ml-[20px] pt-[80px]">
          {/* <FilterPrice/> */}
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
          {filteredProducts
            ?.filter(
              (product) =>
                product.price >= minValue && product.price <= maxValue
            )
            ?.map((item) => (
              <Link to={`/checkout/cart/`}>
                <div key={item.id} className=" w-full">
                  <div className="w-full  border-solid border-[#E6E6E6] border-[2px] rounded-[5px]  flex flex-col">
                    <img
                      src={item.image[0]}
                      alt="photo"
                      className="w-full h-full"
                    />
                    <p className="mr-[10px] mb-[10px] mt-[25px]">{item.name}</p>
                    <p className="mr-[10px]  mb-[25px] mt-[10px]">
                      {item.price} تومان
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
export default ProductListPage;
