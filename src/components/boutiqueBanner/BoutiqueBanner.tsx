import { Link } from "react-router-dom";
function BoutiqueBanner() {
  return (
    <div>
      <div className="boutique-banner-mobile lg:hidden w-full h-full flex flex-col justify-between items-center gap-[10px] ">
        <Link to={"/productList"}>
          <div className="w-full bg-[#232428] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/snapedit_1713804443724_fpig.jpg"
                alt="photo"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className=" font-semibold">شلواردامنی زنانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[15px]">
                <p>1990000</p>
                <p>تومان</p>
              </div>
              <p className="text-[12px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <div className="w-full bg-[#CE9C9F] flex flex-row justify-between items-center">
          <div className="w-7/12 ">
            <img
              className="w-full h-full"
              src="https://s8.uupload.ir/files/snapedit_1713804467836_i6ta.jpg"
              alt="photo"
            ></img>
          </div>
          <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
            <p className=" font-semibold">کت دخترانه</p>
            <div className="flex justify-between items-center gap-[3px] text-[15px]">
              <p>160000</p>
              <p>تومان</p>
            </div>
            <p className="text-[12px] underline ">همین الان بخر</p>
          </div>
        </div>
        <div className="w-full bg-[#1F2430] flex flex-row justify-between items-center">
          <div className="w-7/12 ">
            <img
              className="w-full h-full"
              src="https://s8.uupload.ir/files/2_s370.png"
              alt="photo"
            ></img>
          </div>
          <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
            <p className=" font-semibold">کت شلوار مردانه</p>
            <div className="flex justify-between items-center gap-[3px] text-[15px]">
              <p>2800000</p>
              <p>تومان</p>
            </div>
            <p className="text-[12px] underline ">همین الان بخر</p>
          </div>
        </div>
        <div className="w-full bg-[#84937E] flex flex-row justify-between items-center">
          <div className="w-7/12 ">
            <img
              className="w-full h-full"
              src="https://s8.uupload.ir/files/snapedit_1713803754309_ih16.jpg"
              alt="photo"
            ></img>
          </div>
          <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
            <p className=" font-semibold">تیشرت مردانه</p>
            <div className="flex justify-between items-center gap-[3px] text-[15px]">
              <p>100000</p>
              <p>تومان</p>
            </div>
            <p className="text-[12px] underline ">همین الان بخر</p>
          </div>
        </div>

        <div className="w-full bg-[#D60055] flex flex-row justify-between items-center">
          <div className="w-7/12 ">
            <img
              className="w-full h-full"
              src="https://s8.uupload.ir/files/snapedit_1713804204156_pxqu.jpg"
              alt="photo"
            ></img>
          </div>
          <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
            <p className=" font-semibold">مایو دخترانه</p>
            <div className="flex justify-between items-center gap-[3px] text-[15px]">
              <p>800000</p>
              <p>تومان</p>
            </div>
            <p className="text-[12px] underline ">همین الان بخر</p>
          </div>
        </div>
        <div className="w-full bg-[#A75C31] flex flex-row justify-between items-center">
          <div className="w-7/12 ">
            <img
              className="w-full h-full"
              src="https://s8.uupload.ir/files/snapedit_1713804337760_w7tt.jpg"
              alt="photo"
            ></img>
          </div>
          <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
            <p className=" font-semibold">صندل دخترانه</p>
            <div className="flex justify-between items-center gap-[3px] text-[15px]">
              <p>180000</p>
              <p>تومان</p>
            </div>
            <p className="text-[12px] underline ">همین الان بخر</p>
          </div>
        </div>
        <div className="w-full bg-[#114039] flex flex-row justify-between items-center">
          <div className="w-7/12 ">
            <img
              className="w-full h-full"
              src="https://s8.uupload.ir/files/snapedit_1713804825795_pliw.jpg"
              alt="photo"
            ></img>
          </div>
          <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
            <p className=" font-semibold">سویشرت پسرانه</p>
            <div className="flex justify-between items-center gap-[3px] text-[15px]">
              <p>150000</p>
              <p>تومان</p>
            </div>
            <p className="text-[12px] underline ">همین الان بخر</p>
          </div>
        </div>
        <div className="w-full bg-[#FE5300] flex flex-row justify-between items-center">
          <div className="w-7/12 ">
            <img
              className="w-full h-full"
              src="https://s8.uupload.ir/files/snapedit_1713804262069_yjog.jpg"
              alt="photo"
            ></img>
          </div>
          <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
            <p className=" font-semibold">کیف زنانه</p>
            <div className="flex justify-between items-center gap-[3px] text-[15px]">
              <p>210000</p>
              <p>تومان</p>
            </div>
            <p className="text-[12px] underline ">همین الان بخر</p>
          </div>
        </div>
        <div className="w-full bg-[#A8A158] flex flex-row justify-between items-center">
          <div className="w-7/12 ">
            <img
              className="w-full h-full"
              src="https://s8.uupload.ir/files/snapedit_1713804186156_vyl6.jpg"
              alt="photo"
            ></img>
          </div>
          <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
            <p className=" font-semibold">عینک آفتابی</p>
            <div className="flex justify-between items-center gap-[3px] text-[15px]">
              <p>250000</p>
              <p>تومان</p>
            </div>
            <p className="text-[12px] underline ">همین الان بخر</p>
          </div>
        </div>
      </div>
      <div className="boutique-banner-desktop hidden lg:grid w-full h-full grid-cols-2 justify-between items-center pl-[50px] pr-[50px] gap-x-[30px] gap-y-[15px]">
        <Link to={`/productList/مردانه`}>
          <div className="w-full bg-[#35475A] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/snapedit_1713804073988_q118.jpg"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <Link to={"/productList"}>
          <div className="w-full bg-[#1B3044] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/snapedit_1713803901869_h3uo.jpg"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <Link to={"/productList"}>
          <div className="w-full bg-[#232428] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/snapedit_1713804443724_dkz.jpg"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <Link to={"/productList"}>
          <div className="w-full bg-[#787470] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/snapedit_1713804422797_3x6i.jpg"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <Link to={"/productList"}>
          <div className="w-full bg-[#FF99B4] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/snapedit_1713804310413_pprd.jpg"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <Link to={"/productList"}>
          <div className="w-full bg-[#E272AA] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/snapedit_1713804259045_kwzk.jpg"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <Link to={"/productList"}>
          <div className="w-full bg-[#B69E94] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/snapedit_1713804820100_oshx.jpg"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <Link to={"/productList"}>
          <div className="w-full bg-[#5A5A93] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/snapedit_1713803904533_kslo.jpg"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <Link to={"/productList"}>
          <div className="w-full bg-[#A8A158] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/snapedit_1713804186156_06d9.jpg"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <Link to={"/productList"}>
          <div className="w-full bg-[#70715C] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/24_gm0.png"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <Link to={"/productList"}>
          <div className="w-full bg-[#FE5300] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/snapedit_1713804262069_d3gd.jpg"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <Link to={"/productList"}>
          <div className="w-full bg-[#6E5E43] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/25_415s.png"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <Link to={"/productList"}>
          <div className="w-full bg-[#70666E] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/26_3l86.png"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <Link to={"/productList"}>
          <div className="w-full bg-[#603A2B] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/28_fsk4.png"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <Link to={"/productList"}>
          <div className="w-full bg-[#CE9C9F] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/snapedit_1713804467836_rh6v.jpg"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <Link to={"/productList"}>
          <div className="w-full bg-[#0B1C34] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/snapedit_1714043880271_ra8a.jpg"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <Link to={"/productList"}>
          <div className="w-full bg-[#EB0006] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/snapedit_1714041280076_ux8.jpg"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
        <Link to={"/productList"}>
          <div className="w-full bg-[#FFB233] flex flex-row justify-between items-center">
            <div className="w-7/12 ">
              <img
                className="w-full h-full"
                src="https://s8.uupload.ir/files/snapedit_1714041743845_uee1.jpg"
                alt="clothing"
              ></img>
            </div>
            <div className="w-5/12 h-full flex flex-col justify-center items-end gap-[10px] text-white pl-[10px]  ">
              <p className="text-[22px] font-semibold">سویشرت مردانه</p>
              <div className="flex justify-between items-center gap-[3px] text-[18px]">
                <p>2500000</p>
                <p>تومان</p>
              </div>
              <p className="text-[15px] underline ">همین الان بخر</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default BoutiqueBanner;
