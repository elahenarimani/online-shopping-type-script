import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
interface IState {
  id: string | number;
}
interface Isearch {
  id: string | number;
  name: string;
  price: number;
  image: string[];
}
interface ISearchBarContent {
  id: number | string;
  name: string;
  price: number;
  image: string[];
  showSearchBar: Boolean;
  setshowSearchBar: Function;
  filteredProduct: Isearch[];
  setFilteredProduct: Function;
}
function SearchBarContent({
  id,
  name,
  price,
  image,
  showSearchBar,
  setshowSearchBar,
  filteredProduct,
  setFilteredProduct,
}: ISearchBarContent) {
  const dispatch: Function = useDispatch();
  return (
    <div className="w-full">
      <div className="w-full p-[15px] flex  justify-between items-start gap-[10px] border-solid border border-[#E6E6E6] rounded-[5px] ">
        <div className=" min-w-[70px] h-[105px] rounded-[5px] ">
          <img className="w-full h-full " src={image[0]} alt="{name}" />
        </div>
        <div className="w-full flex flex-col justify-between items-start gap-[5px]">
          <p>{name}</p>
          <div className="w-full flex justify-between items-center gap-[10px]">
            <p>قیمت:</p>
            <div className="w-full flex justify-start items-center gap-[3px] text-[#A72F3B] font-bold">
              <p>{price}</p>
              <p>تومان</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBarContent;
