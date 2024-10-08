import { Link } from "react-router-dom";
import "./men.css";
function Men() {
  return (
    <div>
      <table className="w-full pl-[200px] pr-[200px]">
        <tr className="h-[30px] w-full ">
          <th className="w-1/6 text-center  cursor-pointer">
            <Link to="#">بالاپوش</Link>
          </th>
          <th className="w-1/6 text-center  cursor-pointer">
            <Link to="#">شلوار </Link>
          </th>
          <th className="w-1/6 text-center  cursor-pointer">
            <Link to="#">
              <Link to="#">لباس اسپرت</Link>
            </Link>
          </th>
          <th className="w-1/6 text-center  cursor-pointer">
            <Link to="#">سایر محصولات</Link>
          </th>
        </tr>
        <tr className="h-[30px] w-full text-[#7B7B7B]">
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">کت</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">جین</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">تیشرت</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">جوراب</Link>
          </td>
        </tr>
        <tr className="h-[30px] w-full text-[#7B7B7B]">
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">هودی</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">شلوار راحتی</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">ست اسپرت</Link>
          </td>
          <td></td>
        </tr>
        <tr className="h-[30px] w-full text-[#7B7B7B]">
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">پیراهن مردانه</Link>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}
export default Men;
