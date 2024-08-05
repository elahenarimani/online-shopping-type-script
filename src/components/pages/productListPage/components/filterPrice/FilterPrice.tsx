import MultiRangeSlider from "multi-range-slider-react";
import { useContext, useState } from "react";
import './filterPrice.css';
import { ProductListContext } from "../../../../siteSetting/SiteSetting";
function FilterPrice() {
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(15000000);
  const handleInput = (e:any) => {
    set_maxValue(e.maxValue);
    set_minValue(e.minValue); 
  };
  const productListX = useContext(ProductListContext);
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
	</div>
  );
}
export default FilterPrice;
