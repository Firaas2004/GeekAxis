import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="pt-12 flex flex-col gap-4 ">
        <h1 className="font-extrabold text-center text-4xl">
          The Future of Manufacturing
        </h1>
        <h1 className="font-extrabold text-center text-4xl">
          with Latest Technology
        </h1>
        <p className="text-center text-gray-600">
          Expert tech to elevate your manufacturing. Let's take your business
          further.
        </p>
        <div className=" text-center">
          <button className="inline-block bg-[#142f32] hover:bg-[#10331b] hover:scale-105 text-white px-4 py-2 rounded-3xl text-sm font-medium">
            Contact us
          </button>
        </div>
      </div>
      <div className=" flex justify-center items-end gap-10">
        <img
          src="/responsive.png"
          alt="responsive image"
          className="h-96 w-72 rounded-3xl"
        />
        <div className="flex flex-col items-center justify-center gap-1 bg-[#142f32] w-36 h-60 rounded-2xl">
          <h1 className="text-white text-2xl font-semibold">100+</h1>
          <p className="text-gray-400">Our Esteemed</p>
          <p className="text-gray-400">Client and </p>
          <p className="text-gray-400">Patners</p>
        </div>
        <div className="flex flex-col px-5  justify-center  gap-1 bg-white w-56 h-40 rounded-2xl">
          <h1 className="text-gray-800">Total Project</h1>
          <p className="text-2xl font-semibold">55+</p>
          <p className=" text-gray-600">increase of 126 this month </p>
        </div>
        <div className="flex flex-col items-center justify-center  gap-1 bg-[#e3ffcc] w-36 h-60 rounded-2xl">
          <h1 className="text-black">60+</h1>
          <p className="text-gray-700">Years of</p>
          <p className="text-gray-700">Dedicated </p>
          <p className="text-gray-700">Service</p>
        </div>
        <div className="flex flex-col px-6 py-10 justify-end text-white gap-1 bg-[#142f32] h-96 w-72 rounded-3xl">
          <h1>Achieve Optimal</h1>
          <p className="">Efficiency and Boost</p>
          <p>Productivity </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
