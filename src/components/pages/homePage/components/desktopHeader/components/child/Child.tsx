import './child.css'
function Child(){
    return(
        <div>
              <table className='w-full pl-[200px] pr-[200px]'>
               <tr className='h-[30px] w-full '>
               <th className='w-1/6 text-center  cursor-pointer'>نوزادی</th>
                <th className='w-1/6 text-center  cursor-pointer'>دخترانه</th>
                <th className='w-1/6 text-center  cursor-pointer'>پسرانه</th>
               </tr>
               <tr className='h-[30px] w-full text-[#7B7B7B]'>
                <td className='w-1/6 text-center  cursor-pointer'>لباس راحتی </td>
                <td className='w-1/6 text-center  cursor-pointer'>تیشرت و پولوشرت</td>
                <td className='w-1/6 text-center  cursor-pointer'>تیشرت پولوشرت</td>
               </tr>
               <tr className='h-[30px] w-full text-[#7B7B7B]'>
                <td className='w-1/6 text-center  cursor-pointer'>شلوار و سرهمی</td>
                <td className='w-1/6 text-center  cursor-pointer'>شلوار و سرهمی</td>
                <td className='w-1/6 text-center  cursor-pointer'>شلوار و سرهمی</td>
               </tr>
               <tr className='h-[30px] w-full text-[#7B7B7B]'>
                <td className='w-1/6 text-center  cursor-pointer'>پیراهن و سارافن</td>
                <td className='w-1/6 text-center  cursor-pointer'>پیراهن و سارافن</td>
                <td className='w-1/6 text-center  cursor-pointer'>پیراهن</td>
               </tr>
               <tr className='h-[30px] w-full text-[#7B7B7B]'>
                <td className='w-1/6 text-center  cursor-pointer'>جوراب و پاپوش</td>
                <td className='w-1/6 text-center  cursor-pointer'>جوراب و جوراب شلواری</td>
                <td className='w-1/6 text-center  cursor-pointer'>جوراب</td>
               </tr>
              </table>
        </div>
    )
}
export default Child