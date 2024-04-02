import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#e1e2e4]  group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
           
          </span>
          Copyright 2024 | SHOPPII shopping | All Rights Reserved |
          <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-primeColor">
              Powered by VITE+React
            </span>
            <img src={AiOutlineCopyright} alt="" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
