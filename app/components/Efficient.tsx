import React from "react";
import { Fade } from "react-awesome-reveal";
import { GoNorthStar, GoArrowUpRight } from "react-icons/go";
import { RxStack } from "react-icons/rx";
import { AiOutlineTool } from "react-icons/ai";
import { LuShieldHalf } from "react-icons/lu";
import { HiOutlineCube } from "react-icons/hi2";
import { BsGraphUp } from "react-icons/bs";

const Efficient = () => {
  return (
    <div className="bg-[#142f32] pt-14">
      <Fade direction="down" duration={2000}>
        <div className="flex flex-col gap-2 items-center text-white ">
          <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
            Efficient and Integrated
          </h1>
          <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
            Manufacturing Services
          </h1>
          <p className="text-lg">
            Simplify operations with our efficient quality-focused services.{" "}
          </p>
        </div>
      </Fade>

      <div className="flex gap-6 p-16 justify-center items-center flex-wrap">
        <Fade direction="down">
          <div className=" bg-[#1c4246] rounded-xl  w-96 h-48 flex flex-col justify-between p-4">
            <span className="flex justify-between text-white">
              <GoNorthStar className="size-7" />
              <GoArrowUpRight className="size-7" />
            </span>
            <span className="flex flex-col gap-1 text-white">
              <h1 className="font-semibold text-2xl">
                Production and Assembly
              </h1>
              <h1>Details on production process, assembly,</h1>
              <h1>capacity and product types.</h1>
            </span>
          </div>
        </Fade>
        <Fade direction="down">
          <div className=" bg-[#1c4246] rounded-xl  w-96 h-48 flex flex-col justify-between p-4">
            <span className="flex justify-between text-white">
              <RxStack className="size-7" />
              <GoArrowUpRight className="size-7" />
            </span>
            <span className="flex flex-col gap-1 text-white">
              <h1 className="font-semibold text-2xl">
                Production and Assembly
              </h1>
              <h1>Details on production process, assembly,</h1>
              <h1>capacity and product types.</h1>
            </span>
          </div>
        </Fade>
        <Fade direction="down">
          <div className=" bg-[#1c4246] rounded-xl  w-96 h-48 flex flex-col justify-between p-4">
            <span className="flex justify-between text-white">
              <AiOutlineTool className="size-7" />
              <GoArrowUpRight className="size-7" />
            </span>
            <span className="flex flex-col gap-1 text-white">
              <h1 className="font-semibold text-2xl">
                Production and Assembly
              </h1>
              <h1>Details on production process, assembly,</h1>
              <h1>capacity and product types.</h1>
            </span>
          </div>
        </Fade>
        <Fade direction="up">
          <div className=" bg-[#1c4246] rounded-xl  w-96 h-48 flex flex-col justify-between p-4">
            <span className="flex justify-between text-white">
              <LuShieldHalf className="size-7" />
              <GoArrowUpRight className="size-7" />
            </span>
            <span className="flex flex-col gap-1 text-white">
              <h1 className="font-semibold text-2xl">
                Production and Assembly
              </h1>
              <h1>Details on production process, assembly,</h1>
              <h1>capacity and product types.</h1>
            </span>
          </div>
        </Fade>
        <Fade direction="up">
          <div className=" bg-[#1c4246] rounded-xl  w-96 h-48 flex flex-col justify-between p-4">
            <span className="flex justify-between text-white">
              <HiOutlineCube className="size-7" />
              <GoArrowUpRight className="size-7" />
            </span>
            <span className="flex flex-col gap-1 text-white">
              <h1 className="font-semibold text-2xl">
                Production and Assembly
              </h1>
              <h1>Details on production process, assembly,</h1>
              <h1>capacity and product types.</h1>
            </span>
          </div>
        </Fade>
        <Fade direction="up">
          <div className=" bg-[#1c4246] rounded-xl  w-96 h-48 flex flex-col justify-between p-4">
            <span className="flex justify-between text-white">
              <BsGraphUp className="size-7" />
              <GoArrowUpRight className="size-7" />
            </span>
            <span className="flex flex-col gap-1 text-white">
              <h1 className="font-semibold text-2xl">
                Production and Assembly
              </h1>
              <h1>Details on production process, assembly,</h1>
              <h1>capacity and product types.</h1>
            </span>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Efficient;
