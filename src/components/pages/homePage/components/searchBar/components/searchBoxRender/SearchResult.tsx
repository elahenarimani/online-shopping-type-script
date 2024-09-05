// import React, { useContext } from "react";
// import { ProductListContext } from "../../../../../../siteSetting/SiteSetting";
// import "./SearchResult.css";
// interface IProduct {
//   id: string;
//   headcategory: string;
//   category: string;
//   name: string;
//   price: number;
//   instock: number;
//   image: string[];
// }
// interface IProductList {
//   productList?: IProduct[];
//   setProductList?: Function;
// }
// interface ISearchBar {
//   showSearchResult: IProduct[];
// }
// const SearchResult = ({ showSearchResult }: ISearchBar) => {
//   const productListX = useContext(ProductListContext);
//   return (
//     <div className="w-full  h-[300px] border-[#E6E6E6]  border-solid border rounded-[8px] bg-white rounded-b-[8px]  ">
//       {showSearchResult.map((item , index) => {
//          const isLastItem = index === showSearchResult.length - 1
//         return (
//           <div
//             key={item.id}
//             className={`w-full  pt-[10px] flex  justify-between items-start gap-[10px]   text-right text-[14px]`}
//           >
//             <div className={`search-result-item  w-full h-[30px] pl-[8px] pr-[8px] cursor-pointer ${
//                isLastItem ? "rounded-b-[8px]" : ""
//             }`}>
//               <div>
//                 <p className="whitespace-nowrap">{item.name}</p>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default SearchResult;
