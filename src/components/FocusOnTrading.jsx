import React from "react";
import Heading from "./common/Heading";
import CommonBtn from "./common/CommonBtn";
import { focusTradingCard } from "./common/CommonHelper";

const FocusOnTrading = () => {
  return (
    <div className="xl:pt-[140px] md:pt-[90px] sm:pt-[60px] pt-12">
      <div className="container xl:max-w-[1164px] mx-auto xl:px-3 px-6">
        <div className="flex items-center flex-row flex-wrap">
          <div className="lg:w-6/12 w-full lg:pb-0 sm:pb-12 pb-9">
            <div className="py-[4.82px] px-5 bg-primary border border-solid border-pink max-w-[159px] rounded-full mb-[10px]">
              <p className="text-white text-nowrap leading-[140%] text-base font-normal">
                Focus on Trading
              </p>
            </div>
            <Heading
              className="lg:max-w-[567px] mb-4"
              Heading="Simplified Trading, Enhanced Experience"
            />
            <p className="sm:text-base text-sm lg:max-w-[482px] font-normal text-white leading-[140%] opacity-90 mb-4">
              Forget web3 complexity, at Dexodus we make it simple. Just trade.
              Enjoy an overall more intuitive trading experience.
            </p>
            <p className="sm:text-base text-sm lg:max-w-[482px] font-normal text-white leading-[140%] opacity-90 lg:mb-12 mb-6">
              Escape Web3 Complexity with Dexodus: Trade Effortlessly,
              Experience Intuitive Simplicity
            </p>
            <CommonBtn btnName="Start Now" />
          </div>
          <div className="lg:w-6/12 w-full flex lg:gap-[30px] sm:gap-6 gap-4 flex-col">
            {focusTradingCard.map((obj, id) => (
              <div
                key={id}
                className="border-gradient bg-bordergradient backdrop-blur-[20px] border border-solid border-transparent after:absolute after:p-[1px] after:w-full after:h-full after:inset-0 after:bg-lightblack after:pointer-events-none after:-z-[1] rounded-[10px] hover:after:bg-[#A020F0] after:!rounded-[7px] after:transition-all after:ease-linear after:duration-300 transition-all ease-linear duration-300"
              >
                <div className="p-[18px]">
                  <p className="flex gap-4 font-medium leading-[140%] text-white items-center text-2xl mb-3">
                    {obj.svg} {obj.tittle}
                  </p>
                  <p className="text-white lg:max-w-[485px] sm:text-base text-sm leading-[140%] font-normal opacity-90">
                    {obj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusOnTrading;
