import React from "react";
import { BtnArrow } from "./Icon";

const CommonBtn = ({ className, btnName }) => {
  return (
    <div>
      <button
        className={`${className} sm:py-[12.5px] group py-2 text-white px-5 bg-btngradient shadow-btnshadow rounded-full flex justify-center sm:text-base text-sm items-center gap-[10px] leading-[119%] font-semibold hover:shadow-transparent transition-all ease-linear duration-300`}
      >
        {btnName}
        <BtnArrow className="group-hover:translate-x-1 transition-all ease-linear duration-300" />
      </button>
    </div>
  );
};

export default CommonBtn;
