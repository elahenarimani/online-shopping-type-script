import React from "react";
import { useContext, useEffect, useState } from "react";
import { ProductListContext } from "../../../../siteSetting/SiteSetting";
import { CiSearch } from "react-icons/ci";
import "./searchBar.css"
function SearchBar() {
  const productListX = useContext(ProductListContext);
  //   const [filteredData, setFilteredData] = useState([]);//1filter data list 2wich word search
  //   const [wordenter , setwordenter]=usestate("")
  //   function handelefilter(evant){
  //     const searchword = e.target.value
  //     setwordenter(searchword)
  //     const new filter = data.filter(e => {return valueContainerCSS.title.includes(searchword)})
  //     if(searchword == ""){
  //         setFilteredData([])
  //         setwordenter("")

  //     }else{
  //         setfilterdata (newfilter)
  //     }
  // }
  // function clearinput(){
  //     setFilteredData([])
  // }
  return (
   <div className="w-4/12 h-full bg-gray-700 z-10000000000000000000000000000000000000000000000000000000000000000000000000000000000">
    <div className="search w-full h-[30px] border-[#D6D6D6] rounded-[8px] border-solid border-[1px] flex justify-start items-center ">
      <div className="w-[26px] h-[26px] pr-[6px] pl-[6px]  pt-[4px] pb-[4px]">
        <CiSearch color="#A72F3B" />
      </div>
      <div className="searchInput  w-full h-[30px] border-r-[1px] border-solid border-[#767B7F] pl-[6px] flex items-center pr-[4px]">
        <input
          className="w-full h-[23px] pr-[6px] text-[12px] outline-none border-none pb-[4px] placeholder-[#B34B56]"
          placeholder="جستجو"
        ></input>
      </div>
      </div>
      <div className="searchReasult w-full h-[200px] overflow-hidden overflow-y-auto bg-white ">
        {productListX?.productList.map((product) => {
          return <a target="_blank" className="w-[100px] h-[50px] flex justify-center">{product.name}</a>;
        })}
      </div>
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
