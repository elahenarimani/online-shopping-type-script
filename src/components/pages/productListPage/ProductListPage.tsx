import { Params, useParams } from 'react-router-dom';
import { useContext } from 'react';
import {ProductListContext} from "../../siteSetting/SiteSetting"
function ProductListPage(){
  const { categoryName } = useParams<Params>();
  const productListX = useContext(ProductListContext);
  const filteredProducts = productListX?.productList.filter(product => product.head_category=== categoryName);
    return( 
        <div className='max-w-full h-full m-auto ml-[40px] mr-[40px] flex justify-between items-center gap-[5px]'>
         
         {/* {filteredProducts?.map((item) => (
          <div key={item.id} className='w-full h-full'>
            <h3>{item.name}</h3>
            <img src={item.image[0]} alt='{product.name}'  />
            <h3>{item.price}</h3>
            </div>
            ))} */}
            <div className='w-1/5 bg-red-700 p-[15px]'>
           فیلتر کشویی
            </div>
            <div className='w-4/5 bg-gray-800  flex justify-between items-center '>
              <div className='w-1/5 border-solid border-[#E6E6E6]  bg-gray-800' > hgjhgyhg</div>
              <div className='w-1/5  border-solid border-[#E6E6E6]  bg-gray-800' > hgjhgyhg</div>
              <div className='w-1/5  border-solid border-[#E6E6E6]  bg-gray-800' > hgjhgyhg</div>
              <div className='w-1/5  border-solid border-[#E6E6E6]  bg-gray-800' > hgjhgyhg</div>
            </div>
            
        </div>
    )
}
export default ProductListPage;