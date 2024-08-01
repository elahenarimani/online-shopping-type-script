import { Link, Params, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductListContext } from "../../siteSetting/SiteSetting";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addBuyCart } from "../../redux/reducers/buyCart/buyCartReducer";
import FilterPrice from "./components/filterPrice/FilterPrice";
interface IState {
  id: string | number;
  count: number;
}
function ProductListPage() {
  const { categoryName } = useParams<Params>();
  const productListX = useContext(ProductListContext);
  const buyCarty: IState[] = useSelector((state: any) => state.buyCarty);
  const params = useParams();
  const filteredProducts = productListX?.productList.filter(
    (product) => product.head_category === categoryName
  );
  const dispatch: Function = useDispatch();

  return (
    <div className="max-w-full h-full m-auto ml-[40px] mr-[40px] flex justify-between items-center gap-[5px]">
      {/* {filteredProducts?.map((item) => (
          <div key={item.id} className='w-full h-full'>
            <h3>{item.name}</h3>
            <img src={item.image[0]} alt='{product.name}'  />
            <h3>{item.price}</h3>
            </div>
            ))} */}
      <div className="w-2/5  mr-[20px] ml-[20px]">
      <FilterPrice/>
      </div>
     <div className=" grid  grid-cols-4 gap-[15px]">
     {filteredProducts?.map((item) => (
        <Link to={`/checkout/cart/`}>
                  
        <div key={item.id} className=" w-full">
          <div className="w-full  border-solid border-[#E6E6E6] border-[2px] rounded-[5px]  flex flex-col">
            <img src={item.image[0]} alt="photo" className="w-full h-full" />
            <p className="mr-[10px] mb-[10px] mt-[25px]">{item.name}</p>
            <p className="mr-[10px]  mb-[25px] mt-[10px]">{item.price} تومان</p>
            {/* <div className="w-full flex flex-row justify-between items-center gap-[5px]">
              <div className="w-full">
                <Link to={`/checkout/cart/`}>
                  <button
                    className=" w-full h-[38px]  text-white bg-[#A72F3B] text-center pt-[11px] pb-[11px] rounded-[5px] "
                    onClick={() => dispatch(addBuyCart({ id: params.id }))}
                  >
                    <p>رفتن به سبد خرید</p>
                  </button>
                </Link>
              </div>
              <div className="w-[38px] h-[38px] text-[24px] cursor-pointer border-[1px] border-[#A72F3B] text-center pt-[11px] pb-[11px] pl-[11px] pr-[11px] rounded-[5px]">
                <IoMdHeartEmpty color="#A72F3B" />
              </div>
            </div> */}
          </div>
          
        
        </div>
        </Link>
      ))}
     </div>
    </div>
  );
}
export default ProductListPage;
