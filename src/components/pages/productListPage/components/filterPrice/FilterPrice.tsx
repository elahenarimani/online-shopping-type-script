
import Slider , { Range } from 'rc-slider';
import "rc-slider/assets/index.css";
import { useState } from "react";

function FilterPrice(){
    const Slider = require('rc-slider');
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    const [value, setValue] = useState<number|number[]>([0 , 15000000]);
      const OnChangeEventTriggerd = (newValue: [number, number]) => {
        console.log("new Value", newValue);
        setValue(newValue);
      };
      
    return(
        <div>
          <Slider range
          step={500000}
          min={0}
          max={10000000}
           trackStyle={{ backgroundColor: "black", height: 10 }}
           railStyle={{ backgroundColor: "lightgray", height: 10 }}
           handleStyle={[
            {
                borderColor: "#393939",
                height: 20,
                width: 20,
                marginLeft: 0,
                marginTop: -5,
                backgroundColor: "#393939"
              },
              {
                borderColor: "#393939",
                height: 20,
                width: 20,
                marginLeft: 0,
                marginTop: -5,
                backgroundColor: "#393939"
              }
           ]}
          value={value} 
          onChange={OnChangeEventTriggerd}
           />
           <div className="flex justify-between items-center mt-[15px]">
           
            <p>{value[0]}</p>
            <p>{value[1]}</p>
            
           </div>
        </div>
    )
}
export default FilterPrice