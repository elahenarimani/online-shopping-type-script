import { useContext, useState } from "react";
import { ProductListContext } from '../../siteSetting/SiteSetting'
import { Link } from "react-router-dom";
import MobileHeader from "../../mobile-header/MobileHeader";
import DesktopHeader from "../homePage/components/desktopHeader/DesktopHeader";
import './shoppingCart.css';
import { BuyCartContext } from '../../siteSetting/SiteSetting'
import { useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import DesktopShoppingCart from "./components/desktopShoppingCart/DesktopShoppingCart";
import DesktopTotalPrice from "./components/desktopTotalPrice/DesktopTotalPrice";
import { useSelector } from "react-redux";

function ProductListPage() {
    const productListX = useContext(ProductListContext)
    let buyCartX = useContext(BuyCartContext);
    interface IState {
        id: string | number;
        count: number;
      }
    const buyCarty: IState[] = useSelector((state: any) => state.buyCarty);
    interface IProduct {
        id: string,
        head_category: string,
        category: string,
        name: string,
        price: number,
        in_stock: number,
        image: string[]
    }
    interface IProductList {
        productList?: IProduct[],
        setProductList?: Function
    }
    // interface Idata{
    //     id: number;
    //     headCategory: string;
    //     category: string;
    //     name: string;
    //     price: number;
    //     inStock:number;
    //     image: string[]
       
    // }
    
   
    // let [data, setData] = useState<Idata[]>([]);
    //  data = [
    //     {
    //         id: 1,
    //         headCategory: "زنانه",
    //         category: "بالاپوش",
    //         name: "شومیز آستین بلند زنانه تویین",
    //         price: 500000,
    //         inStock: 15,
    //         image: [
    //             "https://cdn.dsmcdn.com/mnresize/600/-/ty1271/product/media/images/prod/PIM/20240422/12/4a58f620-587d-4863-9e3f-ec0facdc2044/1_org_zoom.jpg",
    //             "https://cdn.dsmcdn.com/mnresize/200/-/ty1271/product/media/images/prod/PIM/20240422/12/380a2c88-1567-4acf-a30b-052a7e69b2f1/1_org_zoom.jpg",
    //             "https://cdn.dsmcdn.com/mnresize/200/-/ty1269/product/media/images/prod/PIM/20240422/12/c8ade9d6-fe93-49f5-a818-253e270e0321/1_org_zoom.jpg"
    //         ]
    //     },
    //     {
    //         id: 2,
    //         headCategory: "زنانه",
    //         category: "بالاپوش",
    //         name: "بلوز آستین حلقه ای زنانه اسمارا ",
    //         price: 399000,
    //         inStock: 15,
    //         image: [
    //             "https://cdn.dsmcdn.com/mnresize/600/-/ty1271/product/media/images/prod/PIM/20240422/12/02ed2c1a-2a3a-401d-9898-b24497dc3d6a/1_org_zoom.jpg",
    //             "https://cdn.dsmcdn.com/mnresize/200/-/ty1271/product/media/images/prod/PIM/20240422/12/d68a0bfb-6806-47d9-8ec6-9d190372ae3b/1_org_zoom.jpg"
    //         ]
    //     },
    //     {
    //         id: 3,
    //         headCategory: "کلاه/روسری/شال",
    //         category: "کلاه",
    //         name: "کلاه جین مردانه ",
    //         price: 250000,
    //         inStock: 20,
    //         image: [
    //             "https://cdn.dsmcdn.com/mnresize/600/-/ty349/product/media/images/20220307/8/63889858/405691405/1/1_org_zoom.jpg",
    //             "https://cdn.dsmcdn.com/mnresize/200/-/ty348/product/media/images/20220307/8/63889858/405691405/2/2_org_zoom.jpg",
    //             "https://cdn.dsmcdn.com/mnresize/200/-/ty348/product/media/images/20220307/8/63889858/405691405/3/3_org_zoom.jpg"
    //         ]
    //     }
      
    // ]
  
        const buyCartId =  buyCarty.map(cartItem => cartItem.id  )
        console.log(buyCartId)
        const filteredProductList : IProduct[] | undefined= productListX?.productList.filter(product => buyCartId.includes(product.id))
        console.log(filteredProductList)

 
   
    return (
        <div>
            {/* <ul>
                {productListX?.productList.map(item => (
                    <li key={item.id}>
                        <Link to={'/product/${item.id}'}>{item.name}</Link>
                    </li>
                ))}
            </ul> */}
            {/* <div className="w-full h-full md:hidden">
                <div className="invisible w-full h-[80px] lg:hidden">
                </div>
                <div className="mobile-header w-full h-[80px] fixed top-0 z-[9997]  lg:hidden">
                    <MobileHeader />
                </div>
            </div> */}
            {/* {findIdForRender()} */}
            {console.log(buyCarty)}
            <div className="mobile-wrapper w-full h-full md:hidden">
                <div className="invisible w-full h-[80px] md:hidden">
                </div>
                <div className="mobile-header w-full h-[80px] fixed top-0 z-[9997]  md:hidden">
                    <MobileHeader />
                </div>
                <div className="w-full p-[15px]">
                    <div className="w-full p-[15px] flex justify-between items-start gap-[10px] border-solid border border-[#E6E6E6] rounded-[5px] ">
                        <div className=" min-w-[70px] h-[105px] rounded-[5px] bg-black">
                            {/* <img/> */}
                        </div>
                        <div className="w-full flex flex-col justify-between items-start gap-[5px]">
                            <p>نام کالا</p>
                            <p>فروشنده: کاستومی</p>
                            <div className="w-full flex flex-row justify-start items-center gap-[8px] ">
                                <p className="w-[50px] important!">تعداد:</p>
                                <button className="min-w-[20px] h-[20px]" ><p className="w-full h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white "><FaPlus size={15} /></p></button>
                                <p className="w-[20px] flex justify-center items-center"></p>
                                <button className="min-w-[20px] h-[20px] rounded-[50%] "
                                >
                                    <p className="w-[20px] h-full rounded-[50%] bg-[#A72F3B] flex justify-center items-center text-white "><FiMinus size={15} /></p>
                                </button>
                            </div>
                            <div className="w-full flex justify-between items-center gap-[10px]">
                                <p>قیمت:</p>
                                <div className="w-full flex justify-start items-center gap-[3px] text-[#A72F3B] font-bold">
                                    <p >190</p>
                                    <p >تومان</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <FiX />
                        </div>
                    </div>
                    <div className="w-full h-[45px] border-solid  border-[#E6E6E6] border-b flex justify-between items-center gap-[10px]">
                        <p>جمع کل سفارش:</p>
                        <div className="flex justify-between items-center gap-[3px] font-bold ">
                            <p>190</p>
                            <p>تومان</p>
                        </div>
                    </div>
                    <div className="w-full h-[45px] border-solid  border-[#E6E6E6] border-b flex justify-between items-center gap-[10px]">
                        <p>قیمت نهایی:</p>
                        <div className="flex justify-between items-center gap-[3px] font-bold ">
                            <p >190</p>
                            <p>تومان</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[52px] flex justify-center items-center bg-[#A72F3B] rounded-[5px] text-white fixed bottom-0">
                    <p>ثبت و مرحله بعد</p>
                </div>
            </div>
            <div className="desktop-wrapper hidden md:block  w-full h-full ">
                <DesktopHeader />
                <div className="product-detaile-wrapper h-screen  max-w-[70%] ">
                    <p className="mb-[10px]">سبد خرید شما</p>
                    <div className="w-full h-full flex flex-row justify-between items-start gap-[25px]">
                    <div className="w-3/4">
                        {filteredProductList.map(item => {
                            return (
                                <DesktopShoppingCart  key={item.id}
                                    id={item.id}
                                    headCategory={item.head_category}
                                    category={item.category}
                                    name={item.name}
                                    price={item.price}
                                    image={item.image}
                                    
                                    inStock= {item.in_stock}
                                   
                                //             "id": "5",
                                // "head_category": "آفتابی عینک",
                                // "category": "زنانه",
                                // "name": "عینک قهوه ای طرح پلیان",
                                // "price": 5000000,
                                // "in_stock": 10,
                                // "image": [
                                //   "https://cdn.dsmcdn.com/mnresize/600/-/ty68/product/media/images/20210327/18/75712859/81415201/1/1_org_zoom.jpg",
                                //   "https://cdn.dsmcdn.com/mnresize/200/-/ty44/product/media/images/20210327/18/75712859/81415201/4/4_org_zoom.jpg",
                                //   "https://cdn.dsmcdn.com/mnresize/200/-/ty75/product/media/images/20210327/18/75712859/81415201/3/3_org_zoom.jpg"
                                // ]


                                />
                            )
                        }
                        )}
                    </div>
                    <div className="w-1/4  ">
                    <DesktopTotalPrice />
                    </div>
                    {/* <div className="w-1/4 h-[250px] border-solid border-2 border-[#E6E6E6] rounded-[5px] p-[25px] gap-[10px] flex flex-col justify-between items-center gap-[5px] ">
                        <div className="w-full flex  justify-between items-center gap-[10px]">
                            <p>جمع کل سفارش:</p>
                            <div className="flex justify-between items-center gap-[3px] font-bold ">
                                <p>190</p>
                                <p>تومان</p>
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center gap-[3px]">
                            <p>قیمت نهایی:</p>
                            <div className="flex justify-between items-center gap-[3px] font-bold ">
                                <p >190</p>
                                <p>تومان</p>
                            </div>
                        </div>
                        <div className="w-full h-[52px] flex justify-center items-center bg-[#A72F3B] rounded-[5px] text-white">
                            <p>ثبت و مرحله بعد</p>
                        </div>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductListPage;