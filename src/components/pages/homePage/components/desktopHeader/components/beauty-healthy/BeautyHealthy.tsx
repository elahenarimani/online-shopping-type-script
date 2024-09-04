import './beautyHealthy.css'
function BeautyHealthy(){
    return(
        <div>
            <table  className='w-full pl-[200px] pr-[200px]'>
                <tr className='h-[30px] w-full '>
                    <th className='w-1/6 text-center  cursor-pointer'>عطر و ادکلن</th>
                    <th className='w-1/6 text-center  cursor-pointer'>آرایش و گریم</th>
                    <th className='w-1/6 text-center  cursor-pointer'>مراقبت پوست</th>
                    <th className='w-1/6 text-center  cursor-pointer'>آرایش و مراقبت مو </th>
                    <th className='w-1/6 text-center  cursor-pointer'>بهداشت و مراقبت شخصی</th>
                </tr>
                <tr className='h-[30px] w-full text-[#7B7B7B]'>
                    <td className='w-1/6 text-center  cursor-pointer'>عطر زنانه </td>
                    <td className='w-1/6 text-center  cursor-pointer'>آرایش صورت</td>
                    <td className='w-1/6 text-center  cursor-pointer'>مراقبت پوست</td>
                    <td className='w-1/6 text-center  cursor-pointer'>آرایش مو</td>
                    <td className='w-1/6 text-center  cursor-pointer'>بهداشت دهان و دندان</td>
                </tr>
                <tr className='h-[30px] w-full text-[#7B7B7B]'>
                    <td className='w-1/6 text-center  cursor-pointer'>عطر مردانه</td>
                    <td className='w-1/6 text-center  cursor-pointer'>آرایش چشم و ابرو</td>
                    <td className='w-1/6 text-center  cursor-pointer'>مراقبت مو</td>
                    <td></td>
                    <td className='w-1/6 text-center  cursor-pointer'>بهداشت و مراقیت بدن</td>
                </tr>
                <tr className='h-[30px] w-full text-[#7B7B7B]'>
                    <td></td>
                    <td className='w-1/6 text-center  cursor-pointer'>بهداشت و زیبایی ناخن</td>
                    <td></td>
                    <td></td>
                    <td className='w-1/6 text-center  cursor-pointer'>لوازم برقی آرایشی</td>
                </tr>
            </table>
        </div>
    )
}
export default BeautyHealthy
