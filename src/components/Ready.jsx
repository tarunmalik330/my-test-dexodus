import React from "react";
import CommonBtn from "./common/CommonBtn";

const Ready = () => {
  return (
    <div className="xl:pt-[140px] md:pt-[90px] sm:pt-[60px] pt-12 xl:pb-[140p] md:pb-[90px] sm:pb-[60px] pb-12">
      <div className="container xl:max-w-[1164px] mx-auto xl:px-3 px-6">
        <div className="ready-border-box before:w-full before:inset-0 before:h-full before:absolute before:-z-[1] before:p-[2px] before:pointer-events-none lg:before:rounded-full before:rounded-[60px] relative rounded-full">
          <div className="w-full bg-gradientlayer lg:rounded-full rounded-[60px] lg:h-[388px] min-[380px]:h-[340px] h-[220px] bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col">
            <p className="text-white text-center xl:text-md md:text-6xl sm:text-5xl text-2xl !leading-[130%] font-semibold max-w-[719px] lg:mb-12 sm:mb-10 mb-6">
              Ready to make your mark?
            </p>
            <CommonBtn btnName="Launch App" className="capitalize" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
