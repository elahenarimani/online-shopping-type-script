import axios from "axios";
import { ReactElement, useEffect, useState, createContext } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistore } from "../redux/store";
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
interface IFavProduct {
  id: string;
  headcategory: string;
  category: string;
  name: string;
  price: number;
  instock: number;
  image: string[];
}
interface IBuyCartItem {
  productId: number;
  count: number;
}
interface IBuyCart {
  buyCart: IBuyCartItem[];
  setBuyCart: Function;
}
interface IFavoritProduct {
  favoritProduct?: IFavProduct[];
  setFavoritProduct?: Function;
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
export const FavoritProductContext = createContext<
  | []
  | null
  | {
      favoritProduct: IFavoritProduct[];
      setFavoritProduct: Function;
    }
>(null);
function SiteSetting({ children }: Iprops) {
  const [productList, setProductList] = useState<IProduct[]>([]);
  let [buyCart, setBuyCart] = useState<IBuyCartItem[]>([]);
  useEffect(() => {
    axios
      .get("https://66d432795b34bcb9ab3dece3.mockapi.io/products")
      .then((result) => setProductList(result.data))
      .catch(err => console.log(err))
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <ProductListContext.Provider value={{ productList, setProductList }}>
          <BuyCartContext.Provider value={{ buyCart, setBuyCart }}>
            {children}
          </BuyCartContext.Provider>
        </ProductListContext.Provider>
      </PersistGate>
    </Provider>
  );
}
export default SiteSetting;
