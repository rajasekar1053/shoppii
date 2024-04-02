import React from "react";

const Badge = ({ text }) => {
  return (
    <div className=" bg-[#64748b] opacity-50 w-[92px] h-[35px] text-gray-300 hover:opacity-100 flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer">
      {text}
    </div>
  );
};

export default Badge;
