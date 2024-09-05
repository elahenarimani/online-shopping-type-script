import { MdFavoriteBorder, MdOutlineManageAccounts } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoMdClose, IoMdHeartEmpty } from "react-icons/io";
import Modal from "react-modal";
import Women from "../../../../women/Women";
import Men from "./components/men/Men";
import Child from "./components/child/Child";
import BeautyHealthy from "./components/beauty-healthy/BeautyHealthy";
import HeadCover from "./components/headCover/HeadCover";
import Bag from "./components/bag/Bag";
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
// import SearchBarContent from "../searchBar/components/searchBoxRender/SearchResult";
// import SearchResult from "../searchBar/components/searchBoxRender/SearchResult";
interface IProduct {
  id: string;
  headcategory: string;
  category: string;
  name: string;
  price: number;
  instock: number;
  image: string[];
}
function DesktopHeader() {
  const [womenIsOpen, setWomenIsOpen] = useState<boolean>(false);
  const [menIsOpen, setMenIsOpen] = useState<boolean>(false);
  const [headCoverIsOpen, setHeadCoverIsOpen] = useState<boolean>(false);
  const [childIsOpen, setChildIsOpen] = useState<boolean>(false);
  const [beautyHealthyIsOpen, setBeautyHealthyIsOpen] =
    useState<boolean>(false);
  const [bagIsOpen, setBagIsOpen] = useState<boolean>(false);
  const [searchModalDes, setSearchModalDes] = useState<boolean>(false);
  const [showSearchResultDes, setshowSearchResultDes] = useState<IProduct[]>([]);
  // const [showSearchResult, setshowSearchResult] = useState<IProduct[]>([]);
  const openWomenModal = () => {
    setWomenIsOpen(true);
  };
  const closeWomenModal = () => {
    setWomenIsOpen(false);
  };
  const openMenModal = () => {
    setMenIsOpen(true);
  };
  const closeMenModal = () => {
    setMenIsOpen(false);
  };
  const openChildModal = () => {
    setChildIsOpen(true);
  };
  const closeChildModal = () => {
    setChildIsOpen(false);
  };
  const openBeautyHealthyModal = () => {
    setBeautyHealthyIsOpen(true);
  };
  const closeBeautyHealthyModal = () => {
    setBeautyHealthyIsOpen(false);
  };
  const openHeadCoverModal = () => {
    setHeadCoverIsOpen(true);
  };
  const closeHeadCoverModal = () => {
    setHeadCoverIsOpen(false);
  };
  const openBagModal = () => {
    setBagIsOpen(true);
  };
  const closeBagModal = () => {
    setBagIsOpen(false);
  };
  function handleOpnDesSearchModal() {
    
    setSearchModalDes(true);

  }
  // function handleOpnSearchModal() {
    
  //   setSearchModal(true);

  // }
  interface ICustomeStyles {
    content: {
      top: string;
      left: string;
      right: string;
      bottom: string;
      zIndex: string;
      width?: string;
      transform: string;
      borderRadius?: string;
    };
    overlay?: {
      backgroundColor: string;
      zIndex: string;
    };
  }
  const customStyles: ICustomeStyles = {
    content: {
      top: "23%",
      left: "auto",
      right: "auto",
      bottom: "auto",
      width: "90%",
      zIndex: "9999",
      transform: "translate(-6% , 0)",
      borderRadius: "15px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      zIndex: "9999",
    },
  };
  interface IShoeResult {
    showSearchResultDes: IProduct[];
    setshowSearchResultDes: Function;
    showSearchResult: IProduct[];
    setshowSearchResult: Function;
  }
  return (
    <div className=" w-full h-full  ">
      <p className="w-full h-[40px] text-white bg-[#A72F3B] pt-[5px] pb-[5px] cursor-pointer text-center">
        با عضومیت در کاستومی اولین سفارش خود را رایگان تحویل بگیرید
      </p>
      <div className="w-full h-[70px] p-[10px] flex justify-between items-center bg-white ">
        {/* <div className="w-2/5 h-[70px] flex items-center "> */}







          {/* <div
            className="searchRapper w-full h-[200px] bg-white p-[10px] border-[1px] border-[#767B7F] outline-[10px] outline-offset-2 outline-white border-solid  rounded-[8px] mt-[-2px] mr-0 ml-0 pl-0 z-10000000000000000000000000000000000000000000000000000000000000000000000000000000000"
            onClick={handleOpnSearchModal}
          >
            <div className="search w-full h-[30px] border-[#D6D6D6] border-solid border-b-[1px] flex justify-between items-center  ">
              <div className="w-[30px] h-[30px] pr-[6px] pl-[6px]  cursor-pointer pb-[6px]">
                <CiSearch color="#A72F3B" className="w-full h-full" />
              </div>
              <div className="searchInput  w-full h-[30px] border-r-[1px] border-solid border-[#767B7F] pl-[6px] flex items-center pr-[4px] mt-[-10px]">
                <input
                  className="w-full h-[23px] pr-[6px] text-[12px] outline-none border-none pb-[4px] placeholder-[#B34B56] pt-[5px] pb-[5px]"
                  placeholder="جستجو"
                ></input>
              </div>
              <div className="w-[30px] h-[30px] pr-[6px] pl-[6px]  cursor-pointer pb-[5px] ">
                <IoMdClose color="#A72F3B" className="w-full h-full" />
              </div>
            </div>
          </div> */}
          <div className="search-wrapper w-2/5 h-[30px] border-[1px] border-[#767B7F] border-solid rounded-[8px] flex justify-start items-center"
          onClick={handleOpnDesSearchModal}>
               <div className="w-[30px] h-[30px]  cursor-pointer flex justify-center items-center pr-[3px] pl-[3px]">
                    <CiSearch color="#A72F3B" className="w-full h-full" />
              </div>
              <div className="searchInput  w-full h-full border-r-[1px] border-solid border-[#767B7F] pl-[6px] ">
                <div
                  className="w-full h-[23px] pr-[6px]  pb-[2px] pt-[7px] text-[12px] outline-none border-none text-[#B34B56] text-right "
                  
                >
                                                <p>جستجو</p>

                </div>
                

              </div>
              {/* <div className="w-full pr-[5px] text-[#B34B56] text-[12px]">  
                              <p>جستجو</p>
                </div> */}

          {/* </div> */}


        



          
          {/* <SearchBar setshowSearchResult={setshowSearchResult} /> */}
          {/* <div className="w-full h-full overflow-y-scroll"> */}
          {/* {showSearchResult.length>0 ? (<SearchResult showSearchResult={showSearchResult} />)  : ""}   */}
          {/* </div> */}
        </div>
        {searchModalDes && (
            <SearchBar
              searchModalDes={searchModalDes}
              setSearchModalDes={setSearchModalDes}
              setshowSearchResultDes={setshowSearchResultDes}
              showSearchResultDes={showSearchResultDes}
            />
          )}
        <Link to={"/"}>
          <div className="w-[120px] h-[30px] cursor-pointer">
            <img
              className="w-full h-fulll"
              src="https://s8.uupload.ir/files/capture_85gu.png"
              alt="logo"
            ></img>
          </div>
        </Link>
        <div className="w-4/12 flex justify-end items-center gap-[10px]">
          <div className="text-[24px] cursor-pointer">
            <MdOutlineManageAccounts color="#A72F3B" />
          </div>
          <Link to={"/checkout/cart/"}>
            <div className="text-[24px] cursor-pointer">
              <HiOutlineShoppingBag color="#A72F3B" />
            </div>
          </Link>
          <Link to={"/favorite"}>
            <div className="text-[24px] cursor-pointer">
              <MdFavoriteBorder color="#A72F3B" />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[40px] pt-[10px] pb-[10px] ">
        <div>
          <button onClick={() => openWomenModal()}>
            <p className="cursor-pointer">زنانه</p>
          </button>
          <Modal
            isOpen={womenIsOpen}
            onRequestClose={closeWomenModal}
            contentLabel="Example Modal"
            style={customStyles}
          >
            <div onMouseLeave={closeWomenModal}>
              <button onClick={() => closeWomenModal()}></button>
              <Women />
            </div>
          </Modal>
        </div>
        <div>
          <button onClick={() => openMenModal()}>
            <p className="cursor-pointer">مردانه</p>
          </button>
          <Modal
            isOpen={menIsOpen}
            onRequestClose={closeMenModal}
            contentLabel="Example Modal"
            style={customStyles}
          >
            <div onMouseLeave={closeMenModal}>
              <button onClick={() => closeMenModal()}></button>
              <Men />
            </div>
          </Modal>
        </div>
        <div>
          <button onClick={() => openChildModal()}>
            <p className="cursor-pointer">بچگانه</p>
          </button>
          <Modal
            isOpen={childIsOpen}
            onRequestClose={closeChildModal}
            contentLabel="Example Modal"
            style={customStyles}
          >
            <div onMouseLeave={closeChildModal}>
              <button onClick={() => closeChildModal()}></button>
              <Child />
            </div>
          </Modal>
        </div>
        <div>
          <button onClick={() => openBeautyHealthyModal()}>
            <p className="cursor-pointer"> زیبایی و سلامت</p>
          </button>
          <Modal
            isOpen={beautyHealthyIsOpen}
            onRequestClose={closeBeautyHealthyModal}
            contentLabel="Example Modal"
            style={customStyles}
          >
            <div onMouseLeave={closeBeautyHealthyModal}>
              <button onClick={() => closeBeautyHealthyModal()}></button>
              <BeautyHealthy />
            </div>
          </Modal>
        </div>
        <div>
          <button onClick={() => openHeadCoverModal()}>
            <p className="cursor-pointer">کلاه/روسری/شال</p>
          </button>
          <Modal
            isOpen={headCoverIsOpen}
            onRequestClose={closeHeadCoverModal}
            contentLabel="Example Modal"
            style={customStyles}
          >
            <div onMouseLeave={closeHeadCoverModal}>
              <button onClick={() => closeHeadCoverModal()}></button>
              <HeadCover />
            </div>
          </Modal>
        </div>
        <div>
          <button onClick={() => openBagModal()}>
            <p className="cursor-pointer">کیف</p>
          </button>
          <Modal
            isOpen={bagIsOpen}
            onRequestClose={closeBagModal}
            contentLabel="Example Modal"
            style={customStyles}
          >
            <div onMouseLeave={closeBagModal}>
              <button onClick={() => closeBagModal()}></button>
              <Bag />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
export default DesktopHeader;
