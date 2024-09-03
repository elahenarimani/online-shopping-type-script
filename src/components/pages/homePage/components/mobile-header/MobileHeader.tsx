import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdFavoriteBorder, MdOutlineManageAccounts } from "react-icons/md";
import { PiListBold } from "react-icons/pi";
import ClassifyMobModal from "../../../../classifyMobModal/ClassifyMobModal";
import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
function MobileHeader() {
  const [classifyModal, setclassifyModal] = useState<boolean>(false);
  function openClassifyModal() {
    setclassifyModal(true);
  }
  function closeClassifyModal() {
    setclassifyModal(false);
  }
  interface ICustomClassifyModalStyles {
    content: {
      top: string;
      left: string;
      right: string;
      bottom: string;
      zIndex: string;
      width?: string;
      height: string;
      marginRight: string;
      transform: string;
      borderRadius?: string;
      // overflow: string;
      // scrolling:string
    };
    overlay?: {
      backgroundColor: string;
      zIndex: string;
    };
  }
  const customClassifyModalStyles: ICustomClassifyModalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "90%",
      height: "90%",
      zIndex: "9999",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      // overflow: 'visible'
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: "9998",
    },
  };
  return (
    <div className=" w-full h-full  ">
      <div className=" w-full flex flex-col justify-between items-center ">
        <div className="sigin-wrapper w-full h-[40px] flex flex-row justify-end items-center border-b-[1px] border-solid boder-[#F4F1EE] gap-[8px] bg-white">
          <p className="text-[13px] font-bold">فروشگاه من</p>
          <div className="text-[24px]  pl-[24px]">
            <MdOutlineManageAccounts color="#A72F3B" />
          </div>
        </div>
        <div className="item-shopping-wrapper w-full h-[40px] pl-[16px] pr-[16px] pb-[1px] flex flex-row justify-between items-center border-b-[1px] border-solid boder-[#F4F1EE] bg-white">
          <div className="w-[24px] h-[24px] flex justify-start gap-[5px]">
            <div className="text-[24px]">
              <HiOutlineShoppingBag color="#A72F3B" />
            </div>
            <div className="text-[24px]">
              <FiSearch color="#A72F3B" />
            </div>
            <Link to={"/favorite"}>
              <div className="text-[24px]">
                <MdFavoriteBorder color="#A72F3B" />
              </div>
            </Link>
          </div>
          <Link to={"/"}>
            <div className="w-[96px] h-[24px]">
              <img
                className="w-full h-fulll"
                src="https://s8.uupload.ir/files/capture_85gu.png"
                alt="logo"
              ></img>
            </div>
          </Link>
          <div className="text-[24px] pt-[10px] ">
            <button onClick={() => openClassifyModal()}>
              <PiListBold color="#A72F3B" />
            </button>
          </div>
          <Modal
            isOpen={classifyModal}
            contentLabel="Classify Modal"
            style={customClassifyModalStyles}
            onRequestClose={closeClassifyModal}
          >
            <div onMouseLeave={closeClassifyModal}>
              <button onClick={() => closeClassifyModal()}></button>
              <ClassifyMobModal
                isOpen={classifyModal}
                onRequestClose={() => closeClassifyModal()}
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
export default MobileHeader;
