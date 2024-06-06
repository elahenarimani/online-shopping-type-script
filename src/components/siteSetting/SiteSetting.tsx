import axios from "axios";
import { ReactElement, useEffect, useState, createContext } from "react"
import { Provider } from 'react-redux';
import { store ,persistore } from "../redux/store"
import { PersistGate } from "redux-persist/integration/react";

interface Iprops {
    children: ReactElement
}
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
interface IBuyCartItem {
    productId: number,
    count: number
}
interface IBuyCart {
    buyCart: IBuyCartItem[],
    setBuyCart: Function
}
const initialBuyCart: IBuyCartItem[] = [{ productId: 0, count: 0 }];
export let BuyCartContext = createContext<IBuyCart>({ buyCart: initialBuyCart, setBuyCart: Function });
export const ProductListContext = createContext<null | { productList: IProduct[], setProductList: Function }>(null)
function SiteSetting({ children }: Iprops) {
    const [productList, setProductList] = useState<IProduct[]>([]);
    useEffect(() => {
        axios.get('https://662b7b1dde35f91de15869ec.mockapi.io/products')
            .then(result => setProductList(result.data)
              
            )
    }, [])
    let [buyCart, setBuyCart] = useState<IBuyCartItem[]>([])
    return (
        <Provider store={store}>
            <PersistGate persistor={persistore}>
                <ProductListContext.Provider value={{ productList, setProductList }}>
                    <BuyCartContext.Provider value={{ buyCart, setBuyCart }}>
                        {
                            children
                        }
                    </BuyCartContext.Provider>
                </ProductListContext.Provider>
            </PersistGate>
        </Provider>
    )
}
export default SiteSetting;
