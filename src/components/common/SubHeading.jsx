import React from "react";

const SubHeading = (props) => {
  return (
    <div
      className={`${props.className} py-[4.82px] px-5 bg-primary border border-solid border-pink rounded-full mb-[10px]`}
    >
      <p className="text-white text-nowrap leading-[140%] text-base font-normal">
        {props.SubHeading}
      </p>
    </div>
  );
};

export default SubHeading;
