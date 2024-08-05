import MultiRangeSlider from "multi-range-slider-react";
import { useContext, useEffect, useState } from "react";
import './filterPrice.css';
import { ProductListContext } from "../../../../siteSetting/SiteSetting";
function FilterPrice() {
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(15000000);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]|undefined>([]);
  const productListX = useContext(ProductListContext);
  const handleInput = (e:any) => {
    set_maxValue(e.maxValue);
    set_minValue(e.minValue); 
  };
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
  useEffect(() => {
    const filtered : IProduct[] | undefined = productListX?.productList?.filter(product => product.price >= minValue && product.price <= maxValue);
    setFilteredProducts(filtered);
  }, [minValue, maxValue, productListX]);
  return (
    <div className="App">
		<MultiRangeSlider
			min={0}
			max={15000000}
			step={500000}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
			}}
		/>
    <div>
      <p>{minValue}</p>
      <p>{maxValue}</p>
    </div>
    <div className="product-list">
        {filteredProducts?.map(product => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
	</div>
  );
}
export default FilterPrice;
