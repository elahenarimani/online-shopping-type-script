
import React, { useContext } from "react";
import { ProductListContext } from "../../../../../../siteSetting/SiteSetting";
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
interface ISearchBar {
  showSearchResult: IProduct[];
}
const SearchResult = ({ showSearchResult }: ISearchBar) => {
  const productListX = useContext(ProductListContext);
  return (
    <div className="w-full  h-[500px]">
        {showSearchResult.map((item) => {
          return (
            <div
              key={item.id}
              className="w-full  p-[15px] flex  justify-between items-start gap-[10px]  z-10000000000000000 text-right text-[14px] border-solid border border-[#E6E6E6] rounded-[5px]"
            >
              <div className="   rounded-[5px] ">
                <div className="w-full flex flex-row justify-between items-center gap-[50px] pl-[8px] pr-[8px]">
                  <div>
                    <p className="whitespace-nowrap">{item.name}</p>
                  </div>
                  <div className="w-full flex justify-between items-center gap-[10px] ">
                    <p>قیمت:</p>
                    <div className="w-full flex justify-start items-center gap-[3px] text-[#A72F3B] font-bold whitespace-nowrap">
                      <p>{item.price}</p>
                      <p>تومان</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default SearchResult;
