import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductListContext } from "../../../../siteSetting/SiteSetting";
const ProductCategory = () => {
  const productListX = useContext(ProductListContext);
  return (
    <div className="container-cart w-full h-[230px] md:h-[144px] xl:h-[90px] pl-[16px] pr-[16px] xl:pl-[30px] xl:pr-[30px] grid grid-cols-2  xl:grid-cols-6 md:grid-cols-3 place-items-center justify-around  xl:pt-[15px] xl:pb-[15px] gap-[10px] ">
        <Link to={`/productList/زنانه`}>
          <div className="w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] flex justify-center items-center text-[#ffffff] cursor-pointer">
            <p>زنانه</p>
          </div>
        </Link> 
        <Link to={`/productList/مردانه`}>
          <div className="w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] flex justify-center items-center text-[#ffffff] cursor-pointer">
            <p>مردانه</p>
          </div>
        </Link>
        <Link to={`/productList/بچگانه`}>
          <div className="w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] flex justify-center items-center text-[#ffffff] cursor-pointer">
            <p>بچگانه</p>
          </div>
        </Link>
        <Link to={`/productList/کیف`}>
          <div className="w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] flex justify-center items-center text-[#ffffff] cursor-pointer">
            <p>کیف</p>
          </div>
        </Link>
        <Link to={`/productList/کفش`}>
          <div className="w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] flex justify-center items-center text-[#ffffff] cursor-pointer">
            <p>کفش</p>
          </div>
        </Link>
        <Link to={`/productList/عینک`}>
          <div className="w-[155px] xl:w-[200px] h-[56px] bg-[#A72F3B] rounded-[8px] flex justify-center items-center text-[#ffffff] cursor-pointer">
            <p>عینک</p>
          </div>
        </Link>
    </div>
  );
};
export default ProductCategory;
