import React from "react";
import Website from "../assets/portfolio-website.png";
import WebsiteCode from "../assets/websiteScreen.png";

const Projects = () => {
  return (
    <div name="projects" className="w-full h-full bg-[#0a192f]">
      <div className="sm:max-w-[90vw] lg:max-w-[80vw] mx-auto flex flex-col justify-center p-4 2xl:p-0">
        <div className="pb-2">
          <p className="text-4xl md:text-6xl font-bold inline text-white underline decoration-[3px] md:decoration-[4px] decoration-[#9d0885] underline-offset-4">
            Projects
          </p>
          <p className="py-6 text-gray-300 md:text-xl">
            {"// Check out some of my projects"}
          </p>
        </div>

        {/* GRID CONTAINER */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
          {/* FIRST PROJECT PREVIEW */}
          <div
            style={{ backgroundImage: `url(${Website})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500 z-0"
          >
            {/* PROJECT HOVER EFFECT */}
            <div className="opacity-0 group-hover:opacity-100 duration-[350ms]">
              <span className="text-3xl font-bold text-white tracking-wide 3xl:text-4xl 3xl:tracking-normal">
                Personal Website
              </span>
              <p className="text-lg tracking-wide font-medium flex justify-center pt-4 text-white 3xl:text-xl">
                ReactJS &#x2022; Tailwind &#x2022; AWS
              </p>
              <div className="pt-8 text-center">
                {/* <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300">
                    Demo
                  </button>
                </a> */}
                <a
                  href="https://github.com/Harris-Ryan/portfolio-website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* SECOND PROJECT PREVIEW */}
          <div
            style={{ backgroundImage: `url(${WebsiteCode})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500 z-0"
          >
            {/* PROJECT HOVER EFFECT */}
            <div className="opacity-0 group-hover:opacity-100 duration-[350ms]">
              <span className="text-3xl font-bold text-white tracking-wide 3xl:text-4xl 3xl:tracking-normal">
                Second Project
              </span>
              <p className="text-lg tracking-wide font-medium flex justify-center pt-4 text-white 3xl:text-xl">
                ReactJS &#x2022; Tailwind &#x2022; AWS
              </p>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Harris-Ryan/portfolio-website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* THIRD PROJECT PREVIEW */}
          <div
            style={{ backgroundImage: `url(${WebsiteCode})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500 z-0"
          >
            {/* PROJECT HOVER EFFECT */}
            <div className="opacity-0 group-hover:opacity-100 duration-[350ms]">
              <span className="text-3xl font-bold text-white tracking-wide 3xl:text-4xl 3xl:tracking-normal">
                Third Project
              </span>
              <p className="text-lg tracking-wide font-medium flex justify-center pt-4 text-white 3xl:text-xl">
                ReactJS &#x2022; Tailwind &#x2022; AWS
              </p>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Harris-Ryan/portfolio-website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* FOURTH PROJECT PREVIEW */}
          <div
            style={{ backgroundImage: `url(${WebsiteCode})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500 z-0"
          >
            {/* PROJECT HOVER EFFECT */}
            <div className="opacity-0 group-hover:opacity-100 duration-[350ms]">
              <span className="text-3xl font-bold text-white tracking-wide 3xl:text-4xl 3xl:tracking-normal">
                Fourth Project
              </span>
              <p className="text-lg tracking-wide font-medium flex justify-center pt-4 text-white 3xl:text-xl">
                ReactJS &#x2022; Tailwind &#x2022; AWS
              </p>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Harris-Ryan/portfolio-website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* FIFTH PROJECT PREVIEW */}
          <div
            style={{ backgroundImage: `url(${WebsiteCode})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500 z-0"
          >
            {/* PROJECT HOVER EFFECT */}
            <div className="opacity-0 group-hover:opacity-100 duration-[350ms]">
              <span className="text-3xl font-bold text-white tracking-wide 3xl:text-4xl 3xl:tracking-normal">
                Fifth Project
              </span>
              <p className="text-lg tracking-wide font-medium flex justify-center pt-4 text-white 3xl:text-xl">
                ReactJS &#x2022; Tailwind &#x2022; AWS
              </p>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Harris-Ryan/portfolio-website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* SIXTH PROJECT PREVIEW */}
          <div
            style={{ backgroundImage: `url(${WebsiteCode})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500 z-0"
          >
            {/* PROJECT HOVER EFFECT */}
            <div className="opacity-0 group-hover:opacity-100 duration-[350ms]">
              <span className="text-3xl font-bold text-white tracking-wide 3xl:text-4xl 3xl:tracking-normal">
                Sixth Project
              </span>
              <p className="text-lg tracking-wide font-medium flex justify-center pt-4 text-white 3xl:text-xl">
                ReactJS &#x2022; Tailwind &#x2022; AWS
              </p>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Harris-Ryan/portfolio-website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
