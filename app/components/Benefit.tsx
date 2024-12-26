import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Benefit = () => {
  return (
    <div className="flex flex-col  gap-2  pl-7 pr-40 ">
      <span className="flex flex-col gap-1 font-extrabold text-3xl">
        <h1>Keep Benefits of Our System forYour Business Efficiency</h1>
      </span>
      <span className="text-gray-600">
        <p>
          Our websites/applications boots productivity,cut cost and drive
          business growth
        </p>
      </span>
      <span className="flex flex-col gap-1">
        <div className="flex items-center gap-1 font-bold">
          <IoMdCheckmarkCircle />
          <h1>Boosting Quality with Tech</h1>
        </div>
        <p className="text-gray-600">
          With advanced technology, we help you to achieve top product quality.
        </p>
        <p className="text-gray-600">
          Discover how we can enhance your standards.
        </p>
      </span>
      <span className="flex flex-col gap-1 font-bold">
        <div className="flex items-center gap-1">
          <IoMdCheckmarkCircle />
          <h1>Optimization Production Process</h1>
        </div>
        <p className="text-gray-600">
          Boost factory efficiency and productivity with our innovative
          solutions.
        </p>
        <p className="text-gray-600">
          See how the latest technology can maximise your output.
        </p>
      </span>
      <span className="flex flex-col gap-1 font-bold">
        <div className="flex items-center gap-1">
          <IoMdCheckmarkCircle />
          <h1>Ai-Driven Production</h1>
        </div>
        <p className="text-gray-600">
          Leverage the power of AI to transform your manufacturing processes.
        </p>
        <p className="text-gray-600">
          achieving faster and more effective results.
        </p>
      </span>
    </div>
  );
};

export default Benefit;
