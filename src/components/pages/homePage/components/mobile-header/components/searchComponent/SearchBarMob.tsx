import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
import { ProductListContext } from "../../../../../../siteSetting/SiteSetting";
import "./searchBarMob.css";
interface ISearch {
  searchModal: boolean;
  setSearchModal: Function;
  setshowSearchResult: Function;
  showSearchResult: IProduct[];
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
const SearchBarMob = ({
  searchModal,
  setSearchModal,
  setshowSearchResult,
  showSearchResult,
}: ISearch) => {
  const productListX = useContext(ProductListContext);
  const [serchinput, setSearchInput] = useState<string>("");
  function handleClsSearchModal() {
    setSearchModal(false);
    showSearchResult.splice(0, showSearchResult.length);
  }
  function handleChange(value: string) {
    setSearchInput(value);
    filterData(value);
  }
  function filterData(value: string) {
    const filteredData = productListX?.productList.filter((item) => {
      return value && item && item.name && item.name.includes(value);
    });
    setshowSearchResult(filteredData);
  }
  return (
    <div className="modal-search-wrapper-mob w-full min-h-[100vh] fixed z-1 left-[8px] right-[8px] top-[8px] bottom-[8px] mb-[8px] bg-transparent overflow-hidden">
      <div className=" modal-content-mob h-full bg-white rounded-[8px] pb-[8px] ">
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
            <input
              className="w-full h-[23px] pr-[6px] text-[12px] outline-none border-none pb-[4px] placeholder-[#B34B56] pt-[5px] pb-[10px] rounded-[8px] bg-[#F0F0F1]"
              placeholder="جستجو"
              type="text"
              value={serchinput}
              onChange={(e: any) => handleChange(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="search-render w-full h-full overflow-auto">
          {showSearchResult.map((item) => {
            return (
              <Link to={`/product/${item.id}`}>
                <div
                  className="search-item w-full h-full-screen color-black bg-white flex flex-col justify-start items-start text-right pr-[16px]"
                  onClick={handleClsSearchModal}
                >
                  <p className="w-full h-[32px] pt-[8px]">{item.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SearchBarMob;
