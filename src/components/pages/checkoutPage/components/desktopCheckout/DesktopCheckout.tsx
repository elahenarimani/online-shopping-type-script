import { useDispatch } from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import {
  increasCounter,
  decreaseCounter,
  removeFromLBuyCart,
} from "../../../../redux/reducers/buyCart/buyCartReducer";
interface IDesktop {
  id: number | string;
  headCategory: string;
  category: string;
  name: string;
  price: number;
  image: string[];
  inStock: number;
  count: number;
}
function DesktopCheckout({
  id,
  headCategory,
  category,
  name,
  price,
  image,
  inStock,
  count,
}: IDesktop) {
  const dispatch: Function = useDispatch();
  return (
    <div className="w-full h-full ">
      <div className=" h-[200px] border-solid border-2 border-[#E6E6E6] rounded-[5px] flex  justify-between items-center p-[20px] gap-[10px] mb-[10px] ">
        <div className=" min-w-[70px] h-[105px] rounded-[5px] ">
          <img className="w-full h-full " src={image[0]} alt="{name}" />
        </div>
        <div className="min-w-2/6 max-w-2/6 w-2/6 flex flex-col justify-between items-start gap-[5px]">
          <p>{name}</p>
          <p>فروشنده: کاستومی</p>
        </div>
        <div className="min-w-1/6 flex flex-row justify-start items-center gap-[8px] ">
          <p className="min-w-[50px] important!">تعداد:</p>
          <button
            className="min-w-[20px] h-[20px]"
            onClick={() => dispatch(increasCounter({ id }))}
          >
            <p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white ">
              <FaPlus size={15} />
            </p>
          </button>
          <p className="min-w-[20px] flex justify-center items-center">
            {count}
          </p>
          <button
            className="min-w-[20px] h-[20px] rounded-[50%] "
            onClick={() => dispatch(decreaseCounter({ id }))}
          >
            <p className="min-w-[20px] h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white ">
              <FiMinus size={15} />
            </p>
          </button>
        </div>
        <div className="min-w-1/6 flex justify-between items-center gap-[10px]">
          <p>قیمت:</p>
          <div className="w-full flex justify-between items-center gap-[3px] text-[#A72F3B] font-bold">
            <p>{count * price}</p>
            <p>تومان</p>
          </div>
        </div>
        <button
          className=" w-[20px] h-[20] flex justify-center items-center cursor-pointer"
          onClick={() => dispatch(removeFromLBuyCart({ id }))}
        >
          <FaRegTrashCan color="#B3B3B3" className="w-full h-full" />
        </button>
      </div>
      <div></div>
    </div>
  );
}
export default DesktopCheckout;
