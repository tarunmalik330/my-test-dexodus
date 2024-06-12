import React from "react";

const Heading = ({ Heading, className }) => {
  return (
    <h2
      className={`${className} font-medium xl:text-5xl md:text-4xl text-3xl text-white !leading-[130%]`}
    >
      {Heading}
    </h2>
  );
};

export default Heading;
