// import React from "react";
// import { useContext, useEffect, useState } from "react";
// import {
//   BuyCartContext,
//   ProductListContext,
// } from "../../../../siteSetting/SiteSetting";
// import { CiSearch } from "react-icons/ci";
// import "./searchBar.css";
// import { useSelector } from "react-redux";
// import { IoMdClose } from "react-icons/io";
// import Bar from "./components/searchBoxRender/Bar";
// interface ISearchBar {
//   showSearchBar: boolean;
//   setshowSearchBar: Function;
// }
// function SearchBar({ showSearchBar, setshowSearchBar }: ISearchBar) {
//   const productListX = useContext(ProductListContext);
//   let buyCartX = useContext(BuyCartContext);
//   interface IState {
//     id: string | number;
//     count: number;
//   }
//   interface IProduct {
//     id: string | number;
//     headcategory: string;
//     category: string;
//     name: string;
//     price: number;
//     instock: number;
//     image: string[];
//   }
//   interface IProductList {
//     productList?: IProduct[] | undefined;
//     setProductList?: Function;
//   }
//   interface IfilterProduct {
//     filteredProduct: IProduct[] | undefined;
//     setFilteredProduct: Function;
//   }
//   interface IwordInput {
//     wordInp: string;
//     setWordInp: Function;
//   }
//   const [filteredProduct, setFilteredProduct] = useState<IProduct[]>([]);
//   const [wordInp, setWordInp] = useState("");
//   function handleFilter(e: any) {
//     setWordInp(e.target.value);
//     const currentFilter: IProduct[] | undefined = [];
//     productListX?.productList.filter((item) => {
//       return item?.name?.includes(wordInp);
//     });
//     if (wordInp === "") {
//       setFilteredProduct([]);
//     } else {
//       setFilteredProduct(currentFilter);
//     }
//   }
//   function handleOpen() {
//     setFilteredProduct([]);
//     setWordInp("");
//     setshowSearchBar(false);
//   }
//   return (
//     <div className="searchRapper w-full h-[200px] bg-white p-[10px] border-[1px] border-[#767B7F] outline-[10px] outline-offset-2 outline-white border-solid border-white rounded-[8px] mt-[-2px] mr-0 ml-0 pl-0 z-10000000000000000000000000000000000000000000000000000000000000000000000000000000000">
//       <div className="search w-full h-[30px] border-[#D6D6D6] border-solid border-b-[1px] flex justify-between items-center  ">
//         <div className="w-[30px] h-[30px] pr-[6px] pl-[6px]  cursor-pointer pb-[6px]">
//           <CiSearch color="#A72F3B" className="w-full h-full" />
//         </div>
//         <div className="searchInput  w-full h-[30px] border-r-[1px] border-solid border-[#767B7F] pl-[6px] flex items-center pr-[4px] mt-[-10px]">
//           <input
//             className="w-full h-[23px] pr-[6px] text-[12px] outline-none border-none pb-[4px] placeholder-[#B34B56] pt-[5px] pb-[5px]"
//             placeholder="جستجو"
//             onChange={(e: any) => handleFilter(e)}
//             value={wordInp}
//           ></input>
//         </div>
//         <div
//           className="w-[30px] h-[30px] pr-[6px] pl-[6px]  cursor-pointer pb-[5px] "
//           onClick={handleOpen}
//         >
//           <IoMdClose color="#A72F3B" className="w-full h-full" />
//         </div>
//       </div>
//       {filteredProduct.length !== 0 && (
//         <div className="searchReasult w-full h-[200px] overflow-hidden overflow-y-auto bg-white  flex  flex-col justify-between items-start gap-[10px] ">
//           {filteredProduct?.slice(0, 15)?.map((item) => {
//             return (
//               <Bar
//                 key={item.id}
//                 id={item.id}
//                 name={item.name}
//                 price={item.price}
//                 image={item.image}
//                 showSearchBar={showSearchBar}
//                 setshowSearchBar={setshowSearchBar}
//                 filteredProduct={filteredProduct}
//                 setFilteredProduct={setFilteredProduct}
//               />
//             );
//           })}
//           )
//         </div>
//       )}
//     </div>
//   );
// }
// export default SearchBar;
import React, { useContext, useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { ProductListContext } from "../../../../siteSetting/SiteSetting";
import axios from 'axios';
import SearchBarContent from './components/searchBoxRender/SearchResult';
interface ISearch {
  serchinput :string;
  setSearchInput :Function
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
interface IShoeResult{
  showSearchResult: IProduct[]
  setshowSearchResult: Function
}
interface IProductList {
  productList?: IProduct[];
  setProductList?: Function;
}
interface ISearchBar{
  setshowSearchResult : Function
}
const SearchBar = ({setshowSearchResult}:ISearchBar) => {
  const productListX = useContext(ProductListContext);
  const [serchinput , setSearchInput] = useState<string>("")
  // async function fetchdata() {
  //   let response = await fetch("https://66d432795b34bcb9ab3dece3.mockapi.io/products")
  //   let product = await response.json()
  // }
  // fetchdata()
  // function handleSearch(e:any){
  //   const searchWord = e.target.value
  //   setSearchInput(searchWord)
  //   if(productListX?.productList &&  searchWord){
  //     const filteredProduct = productListX.productList.filter((product) =>
  //        product.name.includes(searchWord))
  //     productListX?.setProductList(filteredProduct)
  //   }else{
  //     fetchdata()
  //   }
  // }
 
  function handleChange(value : string){
    setSearchInput(value)
    filterData(value)
   
  }
  function filterData(value:string){
    const filteredData = productListX?.productList.filter(item => {
      return (
        value && item && item.name && item.name.includes(value)
      )
    })
    setshowSearchResult(filteredData)
  }
  return (
    <div className='w-full'>
         <div className="search w-full h-[30px] border-[#D6D6D6] rounded-[8px] border-solid border-[1px] flex justify-start items-center relative">
          <div className=" w-full absolute top-0 right-0 ">
            {/* {showSearchBar && (
              <SearchBar
                showSearchBar={showSearchBar}
                setshowSearchBar={setshowSearchBar}
              />
            )} */}
          </div>
          <div className="w-[26px] h-[26px] pr-[6px] pl-[6px]  pt-[4px] pb-[4px]">
            <FiSearch color="#A72F3B" />
          </div>
          {/* {productListX?.productList?.filter(item => item.name.includes(serchinput)) ?? ""} */}
          <div className=" w-full h-[30px] border-r-[1px] border-solid border-[#767B7F] pl-[6px] flex items-center pr-[4px] ">
            {/* <SearchBar /> */}
            <input
              className="w-full h-[23px] pr-[6px] text-[12px] outline-none border-none pb-[4px] placeholder-[#B34B56] pt-[5px] pb-[10px]"
              placeholder="جستجو"
              type='text'
              value={serchinput}
              onChange={(e:any) => handleChange(e.target.value)}
            />
          </div>
         
          {/* {productListX?.productList?.filter((item :IProduct[])=> item?.name?.includes(serchinput)) ?? ""} */}
        </div>
       
    </div>
  )
}

export default SearchBar
