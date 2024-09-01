import axios from "axios";
import { ReactElement, useEffect, useState, createContext } from "react";
import { Provider } from "react-redux";
import { store, persistore } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

interface Iprops {
  children: ReactElement;
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
interface IBuyCartItem {
  productId: number;
  count: number;
}
interface IBuyCart {
  buyCart: IBuyCartItem[];
  setBuyCart: Function;
}
const initialBuyCart: IBuyCartItem[] = [{ productId: 0, count: 0 }];
export let BuyCartContext = createContext<IBuyCart>({
  buyCart: initialBuyCart,
  setBuyCart: Function,
});
export const ProductListContext = createContext<null | {
  productList: IProduct[];
  setProductList: Function;
}>(null);
function SiteSetting({ children }: Iprops) {
  const [productList, setProductList] = useState<IProduct[]>([]);
  useEffect(() => {
    axios
      .get("https://66d432795b34bcb9ab3dece3.mockapi.io/products")
      .then((result) => setProductList(result.data));
  }, []);
  let [buyCart, setBuyCart] = useState<IBuyCartItem[]>([]);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <ProductListContext.Provider value={{ productList, setProductList }}>
          <BuyCartContext.Provider value={{ buyCart, setBuyCart }}>
            {children}
            {/* <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
            />

            <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script> */}
          </BuyCartContext.Provider>
        </ProductListContext.Provider>
      </PersistGate>
    </Provider>
  );
}
export default SiteSetting;
