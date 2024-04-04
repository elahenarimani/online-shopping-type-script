import { PiPlaceholder } from "react-icons/pi";

interface IInput{
    valueState : string | number;
    inputHandler : Function ;
    className : string;
    placeholder : string;
}
function Input({valueState , inputHandler , className ,  placeholder}: IInput){
    return(
        <div>
            <input value={valueState} onChange={(e:any) => inputHandler(e)} className={className}  placeholder={ placeholder}/>
        </div>
    )
}
export default Infinity