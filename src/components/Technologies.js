import React from "react";
import TypeScript from "../assets/typescript.png";
import MySQL from "../assets/mysql.png";
import ReactLogo from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import AWS from "../assets/aws.png";

const Experience = () => {
  return (
    <div name="technologies" className="bg-[#0a192f] w-full h-screen">
      <div className="max-w-[1300px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-7xl font-bold inline border-b-4 text-[#ffffff] border-[#9d0885]">
            Technologies
          </p>
          <p className="py-10 text-gray-300 text-3xl">
            {"// Tehcnologies I specialize in"}
          </p>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 text-center py-7 gap-3 text-gray-300">
          <div className="h-[200px] shadow-lg shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500 pt-3">
            <img
              className="w-[115px] mx-auto"
              src={ReactLogo}
              alt="React Logo"
            />
            <p className="my-4 text-xl">React</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500 pt-3">
            <img
              className="w-[110px] mx-auto"
              src={TypeScript}
              alt="TypeScript Logo"
            />
            <p className="my-4 text-xl pt-[5px]">TypeScript</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500 pt-3">
            <img
              className="w-[150px] mx-auto pt-[5px]"
              src={MySQL}
              alt="MySQL Logo"
            />
            <p className="my-4 text-xl pt-[12px]">MySQL</p>
          </div>
          <div className="h-[200px] shadow-lg shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500 pt-3">
            <img
              className="w-[115px] mx-auto"
              src={Tailwind}
              alt="Tailwind Logo"
            />
            <p className="my-4 text-xl">Tailwind</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500 pt-3">
            <img className="w-[110px] mx-auto" src={Node} alt="NodeJS Logo" />
            <p className="my-4 text-xl pt-[7px]">Node</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500 pt-3">
            <img className="w-[110px] mx-auto" src={AWS} alt="Github Logo" />
            <p className="my-4 text-xl pt-[8px]">Amazon Web Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
