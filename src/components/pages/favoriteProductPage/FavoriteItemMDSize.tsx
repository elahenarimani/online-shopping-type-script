import { useDispatch, useSelector } from "react-redux";
import DesktopHeader from "../homePage/components/desktopHeader/DesktopHeader";
import { useContext } from "react";
import { ProductListContext } from "../../siteSetting/SiteSetting";
import { MdFavorite } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import {
  increasCounter,
  decreaseCounter,
} from "../../redux/reducers/buyCart/buyCartReducer";
import { addBuyCart } from "../../redux/reducers/buyCart/buyCartReducer";
import  Button  from "../../button/Button";
interface IFavProduct {
  id: string;
}
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
interface IState {
  id: string | number;
  count: number;
}
function FavoriteItemMDSize() {
  const favoritProduct: IFavProduct[] = useSelector(
    (state: any) => state.favoritProduct
  );
  const productListX = useContext(ProductListContext);
  const favoriteProductsDetails: (IProduct | undefined)[] = favoritProduct?.map(
    (favorite: IFavProduct) =>
      productListX?.productList?.find(
        (item: IProduct) => item.id === favorite.id
      )
  );
  const params = useParams();
  const dispatch: Function = useDispatch();
  const buyCarty: IState[] = useSelector((state: any) => state.buyCarty);
  const currentItem = buyCarty.find((item) => item.id === params.id);
  const count = currentItem ? currentItem.count : 0;
  return (
    <div>
      {/* {console.log(favoriteProductsDetails)} */}

      <div className="desktop-favorite-list w-full h-full ">
        <DesktopHeader />
        <div className="favorite-header w-full h-[64px] bg-[#F0F0F0] flex justify-start items-center gap-[10px] pr-[80px]">
          <div className="w-[48px] h-[48px] text-[24px] cursor-pointer   pt-[11px] pb-[11px] pl-[11px] pr-[11px] ">
            <MdFavorite color="#A72F3B" />
          </div>
          <div>
            <p>علاقه مندی ها</p>
          </div>
        </div>
        <div className="  max-w-full h-full m-auto ml-[80px] mr-[80px] mt-[20px] ">
          <div className="w-full  grid  grid-cols-3 gap-[20px] ">
            {favoriteProductsDetails?.map((item) => {
              return (
                <div key={item?.id} className="">
                  <div className="w-[180px] h-full border-solid border-[#E6E6E6] border-[1px] rounded-[5px] flex flex-col justify-start gap-[8px] pt-0 mt-0 pb-0 mb-0">
                    <div className="w-full h-full">
                      <img
                        src={item?.image[0]}
                        alt="photos"
                        className="w-full h-full rounded-t-[5px]  "
                      />
                    </div>
                    {/* <p className="mr-[10px] mb-[10px] mt-[25px] text-[11px]"> */}
                    <p className=" text-[11px] mr-[8px]">{item?.name}</p>
                    {/* <p className="mr-[10px]  mb-[25px] mt-[10px] text-[11px]"> */}
                    <p className=" text-[11px] mr-[8px]">{item?.price}تومان</p>
                    <div className="add-to-cart w-full flex flex-row justify-start items-center text-[11px] gap-[8px] mr-[8px]">
                      <p className="w-[50px] important!">تعداد:</p>
                      <button
                        className="w-[16px] h-[16px]"
                        onClick={() =>
                          dispatch(increasCounter({ id: params.id }))
                        }
                      >
                        <p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white ">
                          <FaPlus size={12} />
                        </p>
                      </button>
                      <p className="w-[20px] flex justify-center items-center">
                        {count > 0 ? count : 0}
                      </p>
                      <button
                        className={`w-[16px] h-[16px] rounded-[50%] ${
                          count > 0
                            ? "bg-[#A72F3B] rounded-[50%]"
                            : "opacity-50 rounded-[50%]"
                        }`}
                        disabled={count === 0}
                        onClick={() =>
                          dispatch(decreaseCounter({ id: params.id }))
                        }
                      >
                        <p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white ">
                          <FiMinus size={12} />
                        </p>
                      </button>
                    </div>
                    <Link to={`/checkout/cart/`} className="m-0 p-0">
                      <Button
                        className="w-full h-[32px]  bg-[#A72F3B] text-white flex justify-center items-center rounded-b-[5px]"
                        onClickHandler={() =>
                          dispatch(addBuyCart(console.log("hi")))
                        }
                      >
                        <p className="text-[11px]">رفتن به سبد خرید</p>
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default FavoriteItemMDSize;
