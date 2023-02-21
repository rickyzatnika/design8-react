import React from "react";
import CountDownTimer from "../CountdownTimer";

const SectionFour = () => {
  return (
    <div className="w-full h-full relative pb-0 lg:pb-40">
      <div className="w-full h-32 absolute -z-50 -top-1 left-0 right-0 bg-gradient-to-b from-black to-transparent " />
      <CountDownTimer />
    </div>
  );
};

export default SectionFour;
