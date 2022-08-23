import React from "react";
import TypeScript from "../assets/typescript.png";
import MySQL from "../assets/mysql.png";
import ReactLogo from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import AWS from "../assets/aws.png";

const Technologies = () => {
  return (
    <div name="technologies" className="bg-[#0a192f] w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#9d0885] text-[#ffffff]">
            Technologies
          </p>
          <p className="py-4 text-gray-300">
            {"// Tehcnologies I specialize in"}
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 text-gray-300">
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactLogo} alt="React Logo" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={TypeScript}
              alt="TypeScript Logo"
            />
            <p className="my-4">TypeScript</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-[120px] mx-auto" src={MySQL} alt="MySQL Logo" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind Logo" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="NodeJS Logo" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="Github Logo" />
            <p className="my-4">Amazon Web Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
