import React,{useState} from 'react'
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
interface IState {
  id: string | number;

}
interface Isearch{
  id: string | number;
  name: string;
  price: number;
  image: string[];
}
interface ISearchBarContent {
  id: number | string;
  // headCategory: string;
  // category: string;
  name: string;
  price: number;
  image: string[];
  showSearchBar:Boolean;
  setshowSearchBar:Function;
  filteredData :Isearch[], 
  setFilteredData:Function
  // inStock: number;
  // count: number;
}

// interface IfilterData{
//   filteredData:Isearch[];
//   setFilteredData: Function;
// }
function SearchBarContent({
    id,
    // headCategory,
    // category,
    name,
    price,
    image,
    showSearchBar,
    setshowSearchBar,
    // inStock,
    // count,
    
  }: ISearchBarContent) {
    const dispatch: Function = useDispatch();
    // const [filteredData , setFilteredData] = useState([])
  return (
    
    <div className='w-full'>
      {/* {filteredData.length !=0 && ( */}
      <div className="w-full p-[15px] flex  justify-between items-start gap-[10px] border-solid border border-[#E6E6E6] rounded-[5px] ">
        <div className=" min-w-[70px] h-[105px] rounded-[5px] ">
          <img className="w-full h-full " src={image[0]} alt="{name}" />
        </div>
        <div className="w-full flex flex-col justify-between items-start gap-[5px]">
          <p>{name}</p>
          {/* <p>فروشنده: کاستومی</p> */}
          {/* <div className="w-full flex flex-row justify-start items-center gap-[8px] ">
            <p className="w-[50px] important!">تعداد:</p>
            <button className="min-w-[20px] h-[20px]" onClick={() => dispatch(increasCounter({id}))}>
              <p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white ">
                <FaPlus size={15} />
              </p>
            </button>
            <p className="w-[20px] flex justify-center items-center">{count}</p>
            <button className="min-w-[20px] h-[20px] rounded-[50%] " onClick={() => dispatch(decreaseCounter({ id }))}>
              <p className="w-[20px] h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white ">
                <FiMinus size={15} />
              </p>
            </button>
          </div> */}
          <div className="w-full flex justify-between items-center gap-[10px]">
            <p>قیمت:</p>
            <div className="w-full flex justify-start items-center gap-[3px] text-[#A72F3B] font-bold">
              <p>{ price}</p>
              <p>تومان</p>
            </div>
          </div>
        </div>
        {/* <div  onClick={() => dispatch(removeFromLBuyCart({ id }))}>
          <FiX />
        </div> */}
      </div>
      {/* )} */}
    </div>
  )
}

export default SearchBarContent
