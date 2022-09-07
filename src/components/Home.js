import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  return (
    <div name="home" className="w-screen h-screen bg-[#0a192f]">
      <div className="sm:max-w-[90vw] lg:max-w-[75vw] mx-auto px-8 sm:px-12 2xl:px-40 flex flex-col justify-center h-full">
        <p className="text-[#9d0885] text-xl md:text-2xl xl:text-3xl sm:mb-1">
          Hi! My name is
        </p>
        <h1 className="text-4xl sm:text-7xl xl:text-8xl font-bold text-white">
          <TypeWriterEffect
            startDelay={100}
            cursorColor="#ffffff"
            multiText={["{user}", "Ryan"]}
            multiTextDelay={1300}
            typeSpeed={300}
            hideCursorAfterText="true"
          />
        </h1>
        <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#c3c4c9] mt-2">
          - and I'm a software engineer!
        </h2>
        <p className="text-[#c3c4c9] py-4 xl:max-w-[50vw] text-lg xl:text-xl mt-2">
          I'm a full-stack developer & engineer who specializes in creating
          exceptional user experiences through modern, well-thought-out and
          functional design - all while using quick and efficent best-practices
          for software development and engineering.
        </p>
        <Link to="projects" smooth={true} duration={500} offset={-150}>
          <button className="text-white border-2 px-3 py-2 p-4 my-2 rounded-md flex items-center hover:bg-[#9d0885] hover:border-[#9d0885] duration-300 group">
            View Work
            <span className="group-hover:-translate-y-1 group-hover:translate-x-2 group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
