import { Link } from "react-router-dom";
import "./shoes.css";
function Shoes() {
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
        <tr className="h-[30px] w-full text-[#7B7B7B]">
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">کتونی </Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">کتونی </Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> صندل</Link>
          </td>
        </tr>
        <tr className="h-[30px] w-full text-[#7B7B7B]">
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> بوت </Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">رسمی </Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> بوت </Link>
          </td>
        </tr>
        <tr className="h-[30px] w-full text-[#7B7B7B]">
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> رسمی</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> بافت</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">
              <Link to="#">ست </Link>
            </Link>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Shoes;
