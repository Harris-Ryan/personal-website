import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f]">
      <div className="flex flex-col justify-center items-center md:max-w-4xl xl:max-w-6xl mx-auto h-full">
        <div className="grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl md:text-7xl font-bold inline border-b-4 border-[#9d0885] text-white">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-[#dadada] divide-x-4 divide-[#9d0885]">
          <p className="sm:text-right text-4xl xl:text-5xl font-bold">
            Hi, I'm Ryan - nice to meet you! Please message if you have any
            questions!
          </p>
          <p className="text-lg xl:text-2xl xl:font-medium pl-4">
            I am passionate about building, maintaining and learning about
            software to develop solutions and products that help improve the
            lives of those around me. I am constantly looking to learn and
            improve my skills as a developer to be as effective and impactful as
            possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
