import { Link } from "react-router-dom";
import "./bag.css";
function Bag() {
  return (
    <div>
      <table className="w-full pl-[200px] pr-[200px]">
        <tr className="h-[30px] w-full ">
          <th className="w-1/6 text-center  cursor-pointer">
            <Link to="#">کیف مجلسی</Link>
          </th>
          <th className="w-1/6 text-center  cursor-pointer">
            <Link to="#">کیف کوله پشتی</Link>
          </th>
        </tr>
      </table>
    </div>
  );
}
export default Bag;
