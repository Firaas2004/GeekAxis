import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import React from "react";

const Idea = () => {
  return (
    <div className="flex flex-col items-center gap-5 bg-[#142f32] py-16">
      <h1 className="text-3xl font-bold text-white">
        From Idea to Production in Days
      </h1>
      <span className="flex flex-col  text-gray-300 ">
        <p>Accelerate your production with our technologies.Reduce</p>
        <p>downtime and optimize costs. Get s special offer now</p>
      </span>
      <div>
        <button className="bg-[#e3ffcc] p-3 rounded-full">Work With Us</button>
      </div>
    </div>
  );
};

export default Idea;
