import { Link } from "react-router-dom";
import "./women.css";
function Women() {
  return (
    <div>
      <table className="w-full  pl-[200px] pr-[200px]">
        <tr className="h-[30px] w-full">
          <th className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> بالا پوش</Link>
          </th>
          <th className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> پیراهن مردانه</Link>
          </th>
          <th className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> لباس اسپرت و راحتی</Link>
          </th>
          <th className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> سایر محصولات</Link>
          </th>
          <th className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> جین</Link>
          </th>
        </tr>
        <tr className=" h-[30px] text-[#7B7B7B]">
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> شومیز</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> اسلش</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> بلوز آستین بلند</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> جوراب</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> مام فیت / مام استایل</Link>
          </td>
        </tr>
        <tr className="h-[30px] text-[#7B7B7B]">
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> هودی</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> کتان</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> تاپ</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> چشم بند</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> بگ</Link>
          </td>
        </tr>
        <tr className="h-[30px] text-[#7B7B7B]">
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> کاپشن</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> لگ</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> تیشرت</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> کمربند</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> اسکینی</Link>
          </td>
        </tr>
        <tr className="h-[30px] text-[#7B7B7B]">
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> ژاکت</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> شلوارک</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> ست اسپرت</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> نظم دهنده</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> بوت کات</Link>
          </td>
        </tr>
        <tr className=" h-[30px] text-[#7B7B7B]">
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> کت</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> شلوار راحتی</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer"></td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> کیف آرایشی</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> جین راسته</Link>
          </td>
        </tr>
        <tr className="h-[30px] text-[#7B7B7B]">
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> اورال</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer">
            <Link to="#"> کلاسیک</Link>
          </td>
          <td className="w-1/6 text-center  cursor-pointer"></td>
          <td className="w-1/6 text-center  cursor-pointer"></td>
          <td className="w-1/6 text-center  cursor-pointer"></td>
        </tr>
      </table>
    </div>
  );
}
export default Women;
