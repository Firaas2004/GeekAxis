import React from "react";
import { BsSpeedometer, BsArrowUpRightCircleFill } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="flex flex-col gap-5 pb-5  px-4 sm:px-8 md:px-16 lg:px-24">
      <Fade duration={800}>
        <div className="pt-12 flex flex-col gap-4 text-center">
          <Fade direction="left" duration={1500}>
            <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              The Future of Manufacturing
            </h1>
          </Fade>
          <Fade direction="right" duration={1500}>
            <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              with Latest Technology
            </h1>
          </Fade>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Expert tech to elevate your manufacturing. Let's take your business
            further.
          </p>
          <div className="text-center">
            <button className="inline-block bg-[#142f32] hover:bg-[#10331b] hover:scale-105 text-white px-6 py-3 rounded-3xl text-sm sm:text-base font-medium">
              Contact us
            </button>
          </div>
        </div>
      </Fade>

      <div className="flex flex-wrap justify-center items-end gap-10">
        <Fade direction="left" duration={1500}>
          <img
            src="/responsive.png"
            alt="responsive image"
            className="h-64 w-48 sm:h-80 sm:w-60 md:h-96 md:w-72  rounded-3xl"
          />
          <div className="flex flex-col items-center justify-center gap-1 bg-[#142f32] w-28 h-44 sm:w-36 sm:h-60 rounded-2xl">
            <h1 className="text-white text-xl sm:text-2xl font-semibold">
              100+
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">Our Esteemed</p>
            <p className="text-gray-400 text-sm sm:text-base">Client and </p>
            <p className="text-gray-400 text-sm sm:text-base">Patners</p>
          </div>
          <div className="flex flex-col px-4 py-4 sm:px-5 sm:py-5 justify-center gap-1 bg-white w-40 h-32 sm:w-56 sm:h-40 rounded-2xl">
            <div className="flex gap-1 items-center">
              <h1 className="text-gray-800 text-sm sm:text-base">
                Total Project
              </h1>
              <BsArrowUpRightCircleFill className="text-gray-950" />
            </div>
            <p className="text-xl sm:text-2xl font-semibold">55+</p>
            <p className="text-gray-600 text-xs sm:text-sm">
              increase of 126 this month
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 bg-[#e3ffcc] w-28 h-44 sm:w-36 sm:h-60 rounded-2xl">
            <h1 className="text-black text-xl sm:text-2xl">60+</h1>
            <p className="text-gray-700 text-sm sm:text-base">Years of</p>
            <p className="text-gray-700 text-sm sm:text-base">Dedicated </p>
            <p className="text-gray-700 text-sm sm:text-base">Service</p>
          </div>
          <div className="flex flex-col px-8 py-16 sm:px-6 sm:py-10 justify-end text-white gap-1 bg-[#142f32] h-64 w-96 sm:h-80 sm:w-60 md:h-96 md:w-72  rounded-3xl">
            <BsSpeedometer className="size-8" />
            <h1 className="text-sm sm:text-base md:text-lg">Achieve Optimal</h1>
            <p className="text-sm sm:text-base md:text-lg">
              Efficiency and Boost
            </p>
            <p className="text-sm sm:text-base md:text-lg">Productivity</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
