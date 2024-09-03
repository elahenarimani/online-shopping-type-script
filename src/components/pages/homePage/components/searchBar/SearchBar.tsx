import React from "react";
import { useContext, useEffect, useState } from "react";
import {
  BuyCartContext,
  ProductListContext,
} from "../../../../siteSetting/SiteSetting";
import { CiSearch } from "react-icons/ci";
import "./searchBar.css";
import { useSelector } from "react-redux";
// import SearchBarContent from "./components/searchBoxRender/SearchBarContent"
import { IoMdClose } from "react-icons/io";
import Bar from "./components/searchBoxRender/Bar";
interface ISearchBar {
  showSearchBar: boolean;
  setshowSearchBar: Function;
}
function SearchBar({ showSearchBar, setshowSearchBar }: ISearchBar) {
  const productListX = useContext(ProductListContext);
  let buyCartX = useContext(BuyCartContext);
  interface IState {
    id: string | number;
    count: number;
  }
    interface IProduct {
    id: string | number;
    headcategory: string;
    category: string;
    name: string;
    price: number;
    instock: number;
    image: string[];
  }
  interface IProductList {
    productList?: IProduct[] | undefined;
    setProductList?: Function;
  }
  interface IfilterProduct {
    filteredProduct: IProduct[] | undefined;
    setFilteredProduct: Function;
  }
  interface IwordInput {
    wordInp: string;
    setWordInp: Function;
  }
  const [filteredProduct, setFilteredProduct] = useState<IProduct[]>([]);
  const [wordInp, setWordInp] = useState("");
  function handleFilter(e: any) {
    setWordInp(e.target.value);
    const currentFilter: IProduct[] | undefined =[]
      productListX?.productList.filter((item) => {
        return item?.name?.includes(wordInp);
      });
    if (wordInp === "") {
      setFilteredProduct([]);
    } else {
      setFilteredProduct(currentFilter);
    }
  }
  function handleOpen() {
    setFilteredProduct([]);
    setWordInp("");
    setshowSearchBar(false);
  }
  return (
    <div className="searchRapper w-full h-[200px] bg-white p-[10px] border-[1px] border-[#767B7F] outline-[10px] outline-offset-2 outline-white border-solid border-white rounded-[8px] mt-[-2px] mr-0 ml-0 pl-0 z-10000000000000000000000000000000000000000000000000000000000000000000000000000000000">
      <div className="search w-full h-[30px] border-[#D6D6D6] border-solid border-b-[1px] flex justify-between items-center  ">
        <div className="w-[30px] h-[30px] pr-[6px] pl-[6px]  cursor-pointer pb-[6px]">
          <CiSearch color="#A72F3B" className="w-full h-full" />
        </div>
        <div className="searchInput  w-full h-[30px] border-r-[1px] border-solid border-[#767B7F] pl-[6px] flex items-center pr-[4px] mt-[-10px]">
          <input
            className="w-full h-[23px] pr-[6px] text-[12px] outline-none border-none pb-[4px] placeholder-[#B34B56] pt-[5px] pb-[5px]"
            placeholder="جستجو"
            onChange={(e: any) => handleFilter(e)}
            value={wordInp}
          ></input>
        </div>
        <div
          className="w-[30px] h-[30px] pr-[6px] pl-[6px]  cursor-pointer pb-[5px] "
          onClick={handleOpen}
        >
          <IoMdClose color="#A72F3B" className="w-full h-full" />
        </div>
      </div>
      {filteredProduct.length !== 0 && (
        <div className="searchReasult w-full h-[200px] overflow-hidden overflow-y-auto bg-white  flex  flex-col justify-between items-start gap-[10px] ">
          {/* {productListX?.productList.map((product) => { */}
          {/* // return <a target="_blank" className="w-[100px] h-[50px] flex justify-center">{product.name}</a>; */}
          {filteredProduct?.slice(0, 15)?.map((item) => {
            // const cartItem = buyCarty.find((cart) => cart.id == item.id);
            // const count = cartItem ? cartItem.count : 0;
            return (
              // <SearchBarContent
              <Bar
                key={item.id}
                id={item.id}
                // headCategory={item.head_category}
                // category={item.category}
                name={item.name}
                price={item.price}
                image={item.image}
                showSearchBar={showSearchBar}
                setshowSearchBar={setshowSearchBar}
                filteredProduct={filteredProduct}
                setFilteredProduct={setFilteredProduct}
                // inStock={item.in_stock} count={0}
              />
            );
          })}
          ){/* // })} */}
        </div>
      )}
      {/* <div>
        <input onChange={handelefilter} value={wordenter}></input>
        <div className="searchico">
            {filteredData.legth ===0 ? (<search/> ):
             (<close  onClick={clearinput}/>)}
        </div>
      </div>
      {filteredData.legth != 0 &&(
        <div className="dataResault">
        //widt ,heght,bg,boxshadow,overflow:hidden,overflow y auto
        {filteredData.slice(0,15).map((item) => {
          return <a target="_blank">{Data.name}</a>; //esm har chizi ro neshoon mide//width,heght,display,align-items,color,hover bg,cursor
        })}
      </div>
      )} */}
    </div>
  );
}

export default SearchBar;
