import axios from "axios";
import { ReactElement, useEffect, useState, createContext } from "react"
interface Iprops {
    children: ReactElement
}
interface IProduct {
    id: string ,
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
export const ProductListContext = createContext<null | { productList: IProduct[], setProductList: Function }>(null)
function SiteSetting({ children }: Iprops) {
    useEffect(() => {
        axios.get('https://662b7b1dde35f91de15869ec.mockapi.io/products')
            .then(result => setProductList(result.data)
                // .catch(err=> console.log(err))
            )
    }, [])
    const [productList, setProductList] = useState<IProduct[]>([]);
    return (
        <ProductListContext.Provider value={{ productList, setProductList }}>
            {
                children
            }
        </ProductListContext.Provider>
    )
}
export default SiteSetting;
