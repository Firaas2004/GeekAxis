import React from "react";
import { GiTeamIdea } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Team = () => {
  return (
    <div className="bg-[#282930]  ">
      <Fade direction="down" duration={2000}>
        <span className="text-white flex flex-col gap-4 p-7 items-center">
          <GiTeamIdea className="size-20" />
          <h1 className="font-bold text-5xl">Our Team</h1>
          <p className="text-xl text-gray-400 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos nostrum pariatur commodi suscipit qui consequatur ut,
            expedita dolores ex ullam doloremque quo dolore sunt voluptates.
            Animi natus enim labore culpa! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quidem ut veniam fugit dicta
            asperiores rerum quaerat porro hic illo inventore ratione beatae
            assumenda quod explicabo ullam, sunt, non eos illum?
          </p>
        </span>
      </Fade>

      <div className="flex justify-center flex-wrap gap-6 ">
        <Fade></Fade>
        <span className="flex flex-col items-center gap-3 h-2/3 w-96  p-4 bg-[#32343d] rounded-2xl">
          <img
            src="/mubarak.jpg"
            alt="mubarak"
            className="rounded-full w-56 h-56"
          />
          <h1 className="text-gray-400 text-xl">creative leader</h1>
          <h1 className="text-white text-3xl font-bold">Mubarak Abubakar</h1>
          <p className="text-center text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
            reiciendis quod! Cumque, pariatur non atque hic et temporibus autem,
            dolores quisquam est reprehenderit, nesciunt veniam aspernatur sint
            aliquid quas? Quam?
          </p>
          <div className="flex items-center justify-center gap-7 w-96 text-white">
            <FaFacebook className="size-8" />
            <AiFillTwitterCircle className="size-8" />
            <FaInstagramSquare className="size-8" />
          </div>
        </span>
        <span className="flex flex-col items-center gap-3 h-2/3 w-96  p-4 bg-[#32343d] rounded-2xl">
          <img
            src="/mubarak.jpg"
            alt="mubarak"
            className="rounded-full w-56 h-56"
          />
          <h1 className="text-gray-400 text-xl">creative leader</h1>
          <h1 className="text-white text-3xl font-bold">Mubarak Abubakar</h1>
          <p className="text-center text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
            reiciendis quod! Cumque, pariatur non atque hic et temporibus autem,
            dolores quisquam est reprehenderit, nesciunt veniam aspernatur sint
            aliquid quas? Quam?
          </p>
          <div className="flex items-center justify-center gap-7 w-96 text-white">
            <FaFacebook className="size-8" />
            <AiFillTwitterCircle className="size-8" />
            <FaInstagramSquare className="size-8" />
          </div>
        </span>
        <span className="flex flex-col items-center gap-3 h-2/3 w-96  p-4 bg-[#32343d] rounded-2xl">
          <img
            src="/mubarak.jpg"
            alt="mubarak"
            className="rounded-full w-56 h-56"
          />
          <h1 className="text-gray-400 text-xl">creative leader</h1>
          <h1 className="text-white text-3xl font-bold">Mubarak Abubakar</h1>
          <p className="text-center text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
            reiciendis quod! Cumque, pariatur non atque hic et temporibus autem,
            dolores quisquam est reprehenderit, nesciunt veniam aspernatur sint
            aliquid quas? Quam?
          </p>
          <div className="flex items-center justify-center gap-7 w-96 text-white">
            <FaFacebook className="size-8" />
            <AiFillTwitterCircle className="size-8" />
            <FaInstagramSquare className="size-8" />
          </div>
        </span>
        <span className="flex flex-col items-center gap-3 h-2/3 w-96  p-4 bg-[#32343d] rounded-2xl">
          <img
            src="/mubarak.jpg"
            alt="mubarak"
            className="rounded-full w-56 h-56"
          />
          <h1 className="text-gray-400 text-xl">creative leader</h1>
          <h1 className="text-white text-3xl font-bold">Mubarak Abubakar</h1>
          <p className="text-center text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
            reiciendis quod! Cumque, pariatur non atque hic et temporibus autem,
            dolores quisquam est reprehenderit, nesciunt veniam aspernatur sint
            aliquid quas? Quam?
          </p>
          <div className="flex items-center justify-center gap-7 w-96 text-white">
            <FaFacebook className="size-8" />
            <AiFillTwitterCircle className="size-8" />
            <FaInstagramSquare className="size-8" />
          </div>
        </span>
      </div>
      <div className="h-10"></div>
    </div>
  );
};

export default Team;
