import { useContext } from "react";
import { ProductListContext } from '../siteSetting/SiteSetting'
import { Link } from "react-router-dom";
function ProductListPage(){
    const productListX = useContext(ProductListContext)
    return(
        <div>
            <ul>
                {productListX?.productList.map(item => (
                    <li key={item.id}>
                        <Link to={'/product/${item.id}'}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProductListPage;