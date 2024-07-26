import { Params, useParams } from 'react-router-dom';
import { useContext } from 'react';
import {ProductListContext} from "../../siteSetting/SiteSetting"
function ProductListPage(){
  const { categoryName } = useParams<Params>();
  const productListX = useContext(ProductListContext);
  const filteredProducts = productListX?.productList.filter(product => product.head_category=== categoryName);
    return(
        <div>
         {filteredProducts?.map((item) => (
          <div key={item.id} className='w-full h-full'>
            <h3>{item.name}</h3>
            <img src={item.image[0]} alt='{product.name}'  />
            <h3>{item.price}</h3>
            </div>
            ))}
            
        </div>
    )
}
export default ProductListPage;