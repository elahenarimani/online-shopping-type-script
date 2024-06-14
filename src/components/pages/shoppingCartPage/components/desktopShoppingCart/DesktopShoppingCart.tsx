import { FaRegTrashCan } from "react-icons/fa6";
import { useContext } from "react";
import { ProductListContext } from "../../../../siteSetting/SiteSetting";
import { BuyCartContext } from "../../../../siteSetting/SiteSetting";
import { FiMinus, FiX } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import DesktopTotalPrice from "../desktopTotalPrice/DesktopTotalPrice";
import Button from "../../../../button/Button";
import { useSelector } from "react-redux";
import {
  increasCounter,
  decreaseCounter,
  removeFromLBuyCart
} from "../../../../redux/reducers/buyCart/buyCartReducer";
import { useDispatch } from "react-redux";
// interface Idata{
//     id: number,
//     headCategory: string,
//     category: string,
//     name: string,
//     price: number,
//     inStock:number
//     image: string[]

// }
interface IState {
  id: string | number;
  count: number;
}

interface IDesktop {
  id: number;
  headCategory: string;
  category: string;
  name: string;
  price: number;
  image: string[];
  inStock: number;
  count: number;
}

function DesktopShoppingCart({
  id,
  headCategory,
  category,
  name,
  price,
  image,
  inStock,
  count,
}: IDesktop) {
  const buyCarty: IState[] = useSelector((state: any) => state.buyCart);
  const productListX = useContext(ProductListContext);

  let buyCartX = useContext(BuyCartContext);
  const dispatch: Function = useDispatch();
  
  // function handleIncrement (){
  //     (dispatch(increasCounterInCheckout(id)))
  // }
  // function findCountBuyCarty(id:number|string){
  //     console.log(id)
  //    const findCurrentItem = buyCarty?.find(item => item.id == id)
  //    console.log(findCurrentItem)
  //   if(findCurrentItem){
  //     return findCurrentItem?.count
  //   }
  // }
  // function removeFromBuyCart(productId: number | undefined | string){
  //      setData((prevData: Idata[]) => prevData.filter(item => item.id != productId))
  //      console.log({data, productId})
  // }
  //  function removeFromBuyCart(productId: number | undefined | string) {
  //         const buyCartIndexFinder = buyCartX?.buyCart.findIndex(product => product.productId === productId)
  //         if (buyCartIndexFinder >= 0) {
  //             if (buyCartX.buyCart[buyCartIndexFinder].count > 1) {
  //                 const currentItem = buyCartX?.buyCart[buyCartIndexFinder]
  //                 currentItem.count -= 1;
  //                 buyCartX.setBuyCart([...buyCartX.buyCart])
  //             } else {
  //                 const filteredBuyCart = buyCartX.buyCart.filter(item => item.productId !== productId)
  //                 buyCartX.setBuyCart([...filteredBuyCart])

  //             }
  //         }
  //     }
  return (
    <div className="w-full h-full ">
      {/* {console.log(buyCarty)} */}
      <div className=" h-[200px] border-solid border-2 border-[#E6E6E6] rounded-[5px] flex  justify-between items-center p-[20px] gap-[10px] mb-[10px] ">
        <div className=" min-w-[70px] h-[105px] rounded-[5px] ">
          <img className="w-full h-full " src={image[0]} alt={name} />
        </div>
        <div className="min-w-2/6 max-w-2/6 w-2/6 flex flex-col justify-between items-start gap-[5px]">
          <p>{name}</p>
          <p>فروشنده: کاستومی</p>
        </div>
        <div className="min-w-1/6 flex flex-row justify-start items-center gap-[8px] ">
          <p className="min-w-[50px] important!">تعداد:</p>
          {/* <button className="min-w-[20px] h-[20px]" ><p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white " onClick={() => handleIncrement()}><FaPlus size={15} /></p></button> */}
          <button className="min-w-[20px] h-[20px]" onClick={() => dispatch(increasCounter({id}))}>
            <p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white ">
              <FaPlus size={15} />
            </p>
          </button>
          <p className="min-w-[20px] flex justify-center items-center">
            {count}
          </p>
          <button className="min-w-[20px] h-[20px] rounded-[50%] "  onClick={() => dispatch(decreaseCounter({ id }))}>
            <p className="min-w-[20px] h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white ">
              <FiMinus size={15} />
            </p>
          </button>
        </div>
        <div className="min-w-1/6 flex justify-between items-center gap-[10px]">
          <p>قیمت:</p>
          <div className="w-full flex justify-between items-center gap-[3px] text-[#A72F3B] font-bold">
            <p>{  count * price}</p>
            <p>تومان</p>
          </div>
        </div>
        <button className="w-1/6 w-[20px] h-[20] flex justify-center items-center cursor-pointer"   onClick={() => dispatch(removeFromLBuyCart({ id }))} >
          <FaRegTrashCan color="#B3B3B3" className="w-full h-full" />
        </button>
      </div>

      <div>
        {/* <DesktopTotalPrice /> */}
        {/* <div className="w-full flex  justify-between items-center gap-[10px]">
                            <p>جمع کل سفارش:</p>
                            <div className="flex justify-between items-center gap-[3px] font-bold ">
                                <p>190</p>
                                <p>تومان</p>
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center gap-[3px]">
                            <p>قیمت نهایی:</p>
                            <div className="flex justify-between items-center gap-[3px] font-bold ">
                                <p >190</p>
                                <p>تومان</p>
                            </div>
                        </div>
                        <div className="w-full h-[52px] flex justify-center items-center bg-[#A72F3B] rounded-[5px] text-white">
                            <p>ثبت و مرحله بعد</p>
                        </div> */}
      </div>
    </div>
  );
}
export default DesktopShoppingCart;
