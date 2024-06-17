import React from "react";
import { useContext, useEffect, useState } from "react";
import { BuyCartContext, ProductListContext } from "../../../../siteSetting/SiteSetting";
import { CiSearch } from "react-icons/ci";
import "./searchBar.css"
import { useSelector } from "react-redux";
import SearchBarContent from "./components/searchBoxRender/SearchBarContent";
import { IoMdClose } from "react-icons/io";
interface ISearchBar{
  showSearchBar:boolean
   setshowSearchBar: Function }
function SearchBar({showSearchBar , setshowSearchBar }:ISearchBar) {
  const productListX = useContext(ProductListContext);
  let buyCartX = useContext(BuyCartContext);
  interface IState {
    id: string | number;
    count: number;
  }
  // const buyCarty: IState[] = useSelector((state: any) => state.buyCarty);
  interface IProduct {
    id: string | number;
    head_category: string;
    category: string;
    name: string;
    price: number;
    in_stock: number;
    image: string[];
  }
  interface IProductList {
    productList?: IProduct[] |undefined;
    setProductList?: Function;
  }
  // interface Isearch{
  //   id: string | number;
  //   name: string;
  //   price: number;
  //   image: string[];
  // }
  interface IfilterProduct{
    filteredProduct : IProduct[] |undefined;
    setFilteredProduct: Function;
  }
  interface IwordInput{
    wordInp:string 
    setWordInp:Function
  }
  const [filteredProduct , setFilteredProduct] = useState<IProduct[]>([])
  const [wordInp , setWordInp] = useState("")
  // const buyCartId = buyCarty.map((cartItem) => cartItem.id);
  // console.log(buyCartId);
  // const filteredProductList: IProduct[] | undefined =
  //   productListX?.productList.filter((product) =>
  //     buyCartId.includes(product.id)
  //   );
  // console.log(filteredProductList);
  function handleFilter(e:any){
     setWordInp(e.target.value)
     const currentFilter:IProduct[] | undefined = productListX?.productList.filter((item) => {
      return item?.name?.includes(wordInp )
     })
     if(wordInp==""){
      setFilteredProduct([])
     }else{
      setFilteredProduct(currentFilter)
     }
     
  }
  function handleOpen() {
    setFilteredProduct([])
    setWordInp("")
    setshowSearchBar(false);
    
  }
  return (
   <div className="w-full h-[200px] bg-gray-700 p-[10px]  rounded-[8px] z-10000000000000000000000000000000000000000000000000000000000000000000000000000000000">
    <div className="search w-full h-[30px] border-[#D6D6D6] border-solid border-b-[1px] flex justify-start items-center ">
      <div className="w-[26px] h-[26px] pr-[6px] pl-[6px]  pt-[4px] pb-[4px]">
        {filteredProduct.length === 0  ? <div className="cursor-pointer"><CiSearch color="#A72F3B" /> </div> : <div className="cursor-pointer" onClick={handleOpen}><IoMdClose color="#A72F3B" /></div>}
        
      </div>
      <div className="searchInput  w-full h-[30px] border-r-[1px] border-solid border-[#767B7F] pl-[6px] flex items-center pr-[4px] mt-[5px]">
        <input
          className="w-full h-[23px] pr-[6px] text-[12px] outline-none border-none pb-[4px] placeholder-[#B34B56] pt-[5px] pb-[5px]"
          placeholder="جستجو"
          onChange={(e:any) => handleFilter(e)}
          value={wordInp}
        ></input>
      </div>
      </div>
      {filteredProduct.length !=0 && (
      <div className="searchReasult w-full h-[200px] overflow-hidden overflow-y-auto bg-white  flex  flex-col justify-between items-start gap-[10px] ">
        {/* {productListX?.productList.map((product) => { */}
          {/* // return <a target="_blank" className="w-[100px] h-[50px] flex justify-center">{product.name}</a>; */}
          
            {
              filteredProduct?.slice(0,15)?.map((item) => {
                // const cartItem = buyCarty.find((cart) => cart.id == item.id);
                // const count = cartItem ? cartItem.count : 0;
                return (
                  <SearchBarContent
                    key={item.id}
                    id={item.id}
                    // headCategory={item.head_category}
                    // category={item.category}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    showSearchBar={showSearchBar} 
                    setshowSearchBar={setshowSearchBar} 
                    filteredProduct ={filteredProduct }
                    setFilteredProduct={setFilteredProduct}
                    // inStock={item.in_stock} count={0}                  
                  />
                );
              })
            
         })
        {/* // })} */}
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
