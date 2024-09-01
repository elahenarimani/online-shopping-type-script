import { useSelector } from "react-redux";
import { ProductListContext } from "../../../../siteSetting/SiteSetting";
import { useContext, useState, useEffect } from "react";
interface IProduct {
  id: string | number;
  headcategory: string;
  category: string;
  name: string;
  price: number;
  instock: number;
  image: string[];
}
interface IDesktopTotalPrice {
  filteredProductList: IProduct[] | undefined;
}
function DesktopTotalPrice({ filteredProductList }: IDesktopTotalPrice) {
  interface IState {
    id: string | number;
    count: number;
  }
  const buyCarty: IState[] = useSelector((state: any) => state.buyCarty);
  const productId = filteredProductList?.map((product) => product.id);
  const productListX = useContext(ProductListContext);
  const [totalPrice, setTotalPrice] = useState(0);
  function calcuteTotalPrice() {
    let totalPrice: number = 0;
    buyCarty.map((product) => {
      const matchedProduct = productListX?.productList.find(
        (item) => item.id == product.id
      );
      console.log(product);
      console.log(matchedProduct);
      if (matchedProduct) {
        const productTotalPrice = matchedProduct.price * product.count;
        console.log(matchedProduct.price);
        console.log(product.count);
        console.log(totalPrice);
        totalPrice += productTotalPrice;
      }
      console.log(totalPrice);
    });
    return totalPrice;
  }
  useEffect(
    () => setTotalPrice(calcuteTotalPrice()),
    [buyCarty, productListX?.productList]
  );
  return (
    <div className="h-[250px] border-solid border-2 border-[#E6E6E6] rounded-[5px] p-[25px] gap-[10px] flex flex-col justify-between items-center gap-[5px] ">
      <div className="w-full flex  justify-between items-center gap-[10px]">
        <p>جمع کل سفارش:</p>
        <div className="flex justify-between items-center gap-[3px] font-bold ">
          <p>{totalPrice}</p>
          <p>تومان</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center gap-[3px]">
        <p>قیمت نهایی:</p>
        <div className="flex justify-between items-center gap-[3px] font-bold ">
          <p>{totalPrice}</p>
          <p>تومان</p>
        </div>
      </div>
      <div className="w-full h-[52px] flex justify-center items-center bg-[#A72F3B] rounded-[5px] text-white">
        <p>ثبت و مرحله بعد</p>
      </div>
    </div>
  );
}
export default DesktopTotalPrice;
