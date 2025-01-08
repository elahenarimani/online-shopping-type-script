import { RiCloseFill } from "react-icons/ri";
import { MdNavigateBefore } from "react-icons/md";
import { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
interface IClassifyMobModal {
  onRequestClose: Function;
  isOpen: boolean;
  setclassifyModal: Function;
}
function ClassifyMobModal({
  isOpen,
  onRequestClose,
  setclassifyModal,
}: IClassifyMobModal) {
  const [womenIsOpen, setWomenIsOpen] = useState<boolean>(false);
  const [menIsOpen, setMenIsOpen] = useState<boolean>(false);
  const [childIsOpen, setChildIsOpen] = useState<boolean>(false);
  // const [beautyHealthyIsOpen, setBeautyHealthyIsOpen] = useState<boolean>(false);
  const [shoeIsOpen, setShoeIsOpen] = useState<boolean>(false);

  const [bagIsOpen, setBagIsOpen] = useState<boolean>(false);
  const [sunglassessIsOpen, setSunglassessIsOpen] = useState<boolean>(false);
  const handleWomenBtnClick = () => {
    setWomenIsOpen(!womenIsOpen);
  };
  const handleMenBtnClick = () => {
    setMenIsOpen(!menIsOpen);
  };
  const handleChildBtnClick = () => {
    setChildIsOpen(!childIsOpen);
  };
  const handleShoeClick = () => {
    setShoeIsOpen(!shoeIsOpen);
  };
  const handleSunglassesBtnClick = () => {
    setSunglassessIsOpen(!sunglassessIsOpen);
  };
  const handleBagBtnClick = () => {
    setBagIsOpen(!bagIsOpen);
  };
  return (
    <div className="w-full flex flex-col justify-between items-start gap-[30px] pt-0 mt-0">
      <button onClick={() => onRequestClose()}>
        <div className="flex flex-row justify-start items-center gap-[8px] text-[18px] pr-[10px] ">
          <p>
            <RiCloseFill />
          </p>
          <p>بستن</p>
        </div>
      </button>
      <div className="font-semibold text-[20px] pr-[10px]  pb-[5px]">
        <p>دسته بندی ها</p>
      </div>
      <button
        onClick={() => handleWomenBtnClick()}
        className={`w-full pr-[10px]  ${
          !womenIsOpen ? "border-b border-gray-300 border-solid pb-[9px]" : ""
        }`}
      >
        <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] ">
          <p>زنانه</p>
          {womenIsOpen ? (
            <div>
              <MdKeyboardArrowDown />
            </div>
          ) : (
            <div>
              <MdKeyboardArrowLeft />
            </div>
          )}
        </div>
      </button>
      {womenIsOpen && (
        <Link to={`/productList/زنانه`} onClick={() => setclassifyModal(false)}>
          <ul className="w-full list-none m-0 pr-[40px] text-right border-b border-gray-300 border-solid ">
            <li className=" pb-[5px]">بالا پوش</li>
            <li className="pt-[5px] pb-[5px]">شلوار</li>
            <li className="pt-[5px] pb-[5px]">لباس اسپورت و راحتی</li>
            <li className="pt-[5px] pb-[5px]">سایر محصولات</li>
            <li className="pt-[5px] pb-[10px]">جین</li>
          </ul>
        </Link>
      )}
      <button
        onClick={() => handleMenBtnClick()}
        className={`w-full pr-[10px]  ${
          !menIsOpen ? "border-b border-gray-300 border-solid pb-[9px]" : ""
        }`}
      >
        <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] ">
          <p>مردانه</p>
          {menIsOpen ? (
            <div>
              <MdKeyboardArrowDown />
            </div>
          ) : (
            <div>
              <MdKeyboardArrowLeft />
            </div>
          )}
        </div>
      </button>
      {menIsOpen && (
        <Link
          to={`/productList/مردانه`}
          onClick={() => setclassifyModal(false)}
        >
          <ul className="list-none m-0 pr-[40px] text-right ">
            <li className=" pb-[5px]">بالا پوش</li>
            <li className="pt-[5px] pb-[5px]">شلوار</li>
            <li className="pt-[5px] pb-[5px]">لباس اسپورت</li>
            <li className="pt-[5px] pb-[5px]">سایر محصولات</li>
          </ul>
        </Link>
      )}
      <button
        onClick={() => handleChildBtnClick()}
        className={`w-full pr-[10px]  ${
          !childIsOpen ? "border-b border-gray-300 border-solid pb-[9px]" : ""
        }`}
      >
        <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] ">
          <p>بچگانه</p>
          {childIsOpen ? (
            <div>
              <MdKeyboardArrowDown />
            </div>
          ) : (
            <div>
              <MdKeyboardArrowLeft />
            </div>
          )}
        </div>
      </button>
      {childIsOpen && (
        <Link
          to={`/productList/بچگانه`}
          onClick={() => setclassifyModal(false)}
        >
          <ul className="list-none m-0 pr-[40px] text-right ">
            <li className=" pb-[5px]">نوزادی</li>
            <li className="pt-[5px] pb-[5px]">دخترانه</li>
            <li className="pt-[5px] pb-[5px]">پسرانه</li>
          </ul>
        </Link>
      )}
      <button
        onClick={() => handleBagBtnClick()}
        className={`w-full pr-[10px]  ${
          !bagIsOpen ? "border-b border-gray-300 border-solid pb-[9px]" : ""
        }`}
      >
        <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] ">
          <p>کیف</p>
          {bagIsOpen ? (
            <div>
              <MdKeyboardArrowDown />
            </div>
          ) : (
            <div>
              <MdKeyboardArrowLeft />
            </div>
          )}
        </div>
      </button>
      {bagIsOpen && (
        <Link to={`/productList/کیف`} onClick={() => setclassifyModal(false)}>
          <ul className="list-none m-0 pr-[40px] text-right ">
            <li className=" pb-[5px]">کیف مجلسی</li>
            <li className="pt-[5px] pb-[5px]">کیف کوله پشتی</li>
          </ul>
        </Link>
      )}
      <button
        onClick={() => handleShoeClick()}
        className={`w-full pr-[10px]  ${
          !shoeIsOpen ? "border-b border-gray-300 border-solid pb-[9px]" : ""
        }`}
      >
        <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] ">
          <p>کفش</p>
          {shoeIsOpen ? (
            <div>
              <MdKeyboardArrowDown />
            </div>
          ) : (
            <div>
              <MdKeyboardArrowLeft />
            </div>
          )}
        </div>
      </button>
      {shoeIsOpen && (
        <Link to={`/productList/کفش`} onClick={() => setclassifyModal(false)}>
          <ul className="list-none m-0 pr-[40px] text-right ">
            <li className="pb-[5px]">زنانه</li>
            <li className="pt-[5px] pb-[5px]">مردانه</li>
            <li className="pt-[5px] pb-[5px]">بچگانه</li>
          </ul>
        </Link>
      )}
      <button
        onClick={() => handleSunglassesBtnClick()}
        className={`w-full pr-[10px]  ${
          !sunglassessIsOpen
            ? "border-b border-gray-300 border-solid pb-[9px]"
            : ""
        }`}
      >
        <div className="w-full flex flex-row justify-start items-center gap-[8px] text-[18px] ">
          <p>عینک</p>
          {sunglassessIsOpen ? (
            <div>
              <MdKeyboardArrowDown />
            </div>
          ) : (
            <div>
              <MdKeyboardArrowLeft />
            </div>
          )}
        </div>
      </button>
      {sunglassessIsOpen && (
        <Link to={`/productList/عینک`} onClick={() => setclassifyModal(false)}>
          <ul className="list-none m-0 pr-[40px] text-right ">
            <li className=" pb-[5px]">زنانه</li>
            <li className="pt-[5px] pb-[5px]">مردانه</li>
            <li className="pt-[5px] pb-[5px]">بچگانه</li>
          </ul>
        </Link>
      )}
    </div>
  );
}
export default ClassifyMobModal;
