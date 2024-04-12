import './men.css'
function Men(){
    return(
        <div>
            <table className='w-full pl-[200px] pr-[200px]'>
                <tr className='h-[30px] w-full '>
                    <th className='w-1/6 text-center  cursor-pointer'>بالا پوش </th>
                    <th className='w-1/6 text-center  cursor-pointer'>شلوار</th>
                    <th className='w-1/6 text-center  cursor-pointer'>لباس اسپورت</th>
                    <th className='w-1/6 text-center  cursor-pointer'>سایر محصولات</th>
                </tr>
                <tr className='h-[30px] w-full text-[#7B7B7B]'>
                    <td className='w-1/6 text-center  cursor-pointer'>کت</td>
                    <td className='w-1/6 text-center  cursor-pointer'>جین</td>
                    <td className='w-1/6 text-center  cursor-pointer'>تیشرت</td>
                    <td className='w-1/6 text-center  cursor-pointer'>جوراب</td>
                </tr>
                <tr className='h-[30px] w-full text-[#7B7B7B]'>
                    <td className='w-1/6 text-center  cursor-pointer'>هودی</td>
                    <td className='w-1/6 text-center  cursor-pointer'>شلوار راحتی</td>
                    <td className='w-1/6 text-center  cursor-pointer'>ست اسپرت</td>
                    <td></td>
                </tr>
                <tr className='h-[30px] w-full text-[#7B7B7B]'>
                    <td className='w-1/6 text-center  cursor-pointer'>پیراهن مردانه</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>

        </div>
    )
}
export default Men