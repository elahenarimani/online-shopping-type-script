import { Link } from "react-router-dom";
import "./child.css";
function Child() {
  return (
    <div>
      <table className="w-full pl-[200px] pr-[200px]">
        <tr className="h-[30px] w-full ">
          <th className="w-1/6 text-center  cursor-pointer">
            <Link to="#">نوزادی</Link>
          </th>
          <th className="w-1/6 text-center  cursor-pointer">
            <Link to="#">دخترانه</Link>
          </th>
          <th className="w-1/6 text-center  cursor-pointer">
            <Link to="#">پسرانه</Link>
          </th>
        </tr>
        <tr className="h-[30px] w-full text-[#7B7B7B]">
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">لباس راحتی</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">تیشرت و پولوشرت</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            {" "}
            <Link to="#">تیشرت و پولوشرت</Link>
          </td>
        </tr>
        <tr className="h-[30px] w-full text-[#7B7B7B]">
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">شلوار و سرهمی</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">شلوار و سرهمی</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">شلوار و سرهمی</Link>
          </td>
        </tr>
        <tr className="h-[30px] w-full text-[#7B7B7B]">
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">پیراهن و سارافن</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">پیراهن و سارافن</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">
              <Link to="#">پیراهن </Link>
            </Link>
          </td>
        </tr>
        <tr className="h-[30px] w-full text-[#7B7B7B]">
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">جوراب و پاپوش</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">جوراب و جوراب شلواری</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#">جوراب</Link>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Child;
