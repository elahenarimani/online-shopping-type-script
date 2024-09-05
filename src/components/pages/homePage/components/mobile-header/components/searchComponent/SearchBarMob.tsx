import React, { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { ProductListContext } from "../../../../../../siteSetting/SiteSetting";
interface ISearch {
  searchModal: boolean;
  setSearchModal: Function;
  setshowSearchResult : Function
  showSearchResult:IProduct[]
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
const SearchBarMob = ({ searchModal, setSearchModal ,  setshowSearchResult ,showSearchResult}: ISearch) => {
  const productListX = useContext(ProductListContext);
  const [serchinput , setSearchInput] = useState<string>("")
  function handleClsSearchModal() {
    setSearchModal(false);
    showSearchResult.splice(0, showSearchResult.length);
  }
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
    <div className="modal-search-wrapper w-full h-full fixed z-1 left-[8px] right-[8px] top-[8px] bottom-[8px] bg-transparent overflow-auto">
      <div className="w-11/12 h-full modal-content bg-white  ml-[8px] mr-[8px] pl-[8px] pr-[8px]">
        <div className="search-mobile w-full h-[30px] rounded-[8px] border-solid border-[1px] flex justify-start items-center bg-[#F0F0F1] ">
          <button
            onClick={handleClsSearchModal}
            className="flex justify-center items-center bg-[#F0F0F1] "
          >
            <div className="w-[26px] h-[26px]">
              <RiCloseFill color="#A72F3B" className="w-full h-full" />
            </div>
          </button>
          <div className="w-full h-[30px] border-r-[1px] border-solid border-[#767B7F] pl-[6px] flex items-center pr-[4px] bg-[#F0F0F1] rounded-l-[8px]">

          {/* <input
              className="w-full h-[23px] pr-[6px] text-[12px] outline-none border-none pb-[4px] placeholder-[#B34B56] pt-[5px] pb-[10px]"
              placeholder="جستجو"
              type='text'
              value={serchinput}
              onChange={(e:any) => handleChange(e.target.value)}
            />
 */}

            <input className="w-full h-[23px] pr-[6px] text-[12px] outline-none border-none pb-[4px] placeholder-[#B34B56] pt-[5px] pb-[10px] rounded-[8px] bg-[#F0F0F1]" 
             placeholder="جستجو"
              type='text'
              value={serchinput}
              onChange={(e:any) => handleChange(e.target.value)}
            ></input>
          </div>
       
        </div>
        {showSearchResult.map(item => {
          return(
            <div className="w-full h-full-screen color-black bg-white flex flex-col justify-start items-start text-right pr-[16px]">
            <p className="w-full h-[32px] pt-[8px]">{item.name}</p>
            </div>
          )
        })}
      </div>
   
      {/* <SearchResultMob showSearchResult={showSearchResult} /> */}
    </div>
  );
};

export default SearchBarMob;
