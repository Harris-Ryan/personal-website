import React from "react";
import TypeScript from "../assets/typescript.png";
import MySQL from "../assets/mysql.png";
import ReactLogo from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import AWS from "../assets/aws.png";

const Technologies = () => {
  return (
    <div name="technologies" className="w-full h-screen bg-[#0a192f]">
      <div className="md:max-w-4xl xl:max-w-5xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <p className="text-white text-4xl md:text-6xl xl:text-7xl font-bold inline underline decoration-[3px] md:decoration-[4px] decoration-[#9d0885] underline-offset-4">
          Technologies
        </p>
        <p className="pt-4 pb-8 text-gray-300 md:text-xl xl:text-2xl">
          {"// Tehcnologies I specialize in"}
        </p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 text-gray-300">
          <div className="rounded-lg shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto" src={ReactLogo} alt="React Logo" />
            <p className="my-4 xl:text-xl">React</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-24 mx-auto"
              src={TypeScript}
              alt="TypeScript Logo"
            />
            <p className="my-4 xl:text-xl">TypeScript</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-36 mx-auto" src={MySQL} alt="MySQL Logo" />
            <p className="my-4 xl:text-xl">MySQL</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto" src={Tailwind} alt="Tailwind Logo" />
            <p className="my-4 xl:text-xl">Tailwind</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto" src={Node} alt="NodeJS Logo" />
            <p className="my-4 xl:text-xl">Node</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto" src={AWS} alt="Github Logo" />
            <p className="my-4 xl:text-xl">Amazon Web Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
