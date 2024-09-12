import { Link } from "react-router-dom";
import "./sunglasses.css";
function Sunglasses() {
  return (
    <div>
      <table className="w-full pl-[200px] pr-[200px]">
        <tr className="h-[30px] w-full ">
          <th className="w-1/6 text-center  cursor-pointer">
            <Link to="#">مردانه</Link>
          </th>
          <th className="w-1/6 text-center  cursor-pointer">
            <Link to="#">زنانه</Link>
          </th>
          <th className="w-1/6 text-center  cursor-pointer">
            <Link to="#">بچگانه</Link>
          </th>
        </tr>
      </table>
    </div>
  );
}
export default Sunglasses;
