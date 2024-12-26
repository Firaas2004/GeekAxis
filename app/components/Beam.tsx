import { Button } from "@/components/ui/button";
import React from "react";
import Orbiting from "./Orbiting";
const Beam = () => {
  return (
    <div className="flex justify-center gap-4 sm:gap-5 md:gap-8 lg:gap-14 items-center flex-wrap px-4 pt-20 pb-20">
      <div className="flex flex-col gap-4 pb-7">
        <span className="flex flex-col gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          <h1>Empoewering Top Companies</h1>
          <h1>with Seamless Integration</h1>
        </span>
        <span className="flex flex-col gap-2 text-gray-700">
          <p>
            Experience seamless connection with our innovative solutiomn,
            designed
          </p>
          <p>to effortlessly integrate with your existing system, enhance</p>
          <p>productivity,and drive your business towards greater success.</p>
        </span>

        <div>
          <button className="bg-[#e3ffcc] p-3 rounded-3xl text-gray-800 shadow-lg ">
            Work with Us
          </button>
        </div>
      </div>
      <Orbiting />
      <div className="h-8"></div>
    </div>
  );
};

export default Beam;
