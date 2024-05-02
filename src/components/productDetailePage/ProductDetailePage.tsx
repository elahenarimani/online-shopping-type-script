import { GrFavorite } from "react-icons/gr";
import { GoShareAndroid } from "react-icons/go";
import { useContext } from "react";
interface IProduct{
    id: number,
    head_category: string,
    category: string,
    name: string,
    price: number, 
    in_stock: number,
    image: string[]
}
interface IProductList{
    productList : IProduct[],
    setProductList:Function
}
// const productListX = useContext(ProductListContext)
function ProductDetailePage({productList , setProductList} :IProductList ) {
    return (
        <div className="w-full h-full lg:hidden">
            <div className="w-full h-[30px] flex justify-end items-center pl-[16px] gap-[20px]">
            <div className="text-[24px] ">
                <GoShareAndroid color="#A72F3B"  />
                </div>
                <div className="text-[24px] ">
                    <GrFavorite color="#A72F3B" />
                </div> 
            </div>
            <p>swiper</p>
            <p>مردانه / بالاپوش تیشرت</p>
            <p>نام کالا</p>
            <div className="invisible w-full h-[53px]">  
            </div>
            <div className="w-full h-[53px]  fixed bottom-0 z-10 bg-[#A72F3B] text-white pt-[12px] pb-[12px]">
                <p>افزودن به سبد خرید</p>
            </div>
        </div>
    )
}
export default ProductDetailePage;