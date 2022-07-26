import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f]">
      <div className="flex flex-col justify-center items-center sm:max-w-[95vw] lg:max-w-[80vw] mx-auto h-full">
        <div className="grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-5xl lg:text-6xl font-bold inline underline decoration-[3px] md:decoration-[4px] decoration-[#9d0885] underline-offset-4 text-white">
              About Me
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-[#dadada] divide-x-[3px] md:divide-x-4 divide-[#9d0885]">
          <p className="sm:text-right text-3xl lg:text-4xl font-bold">
            Hi, I'm Ryan - nice to meet you! Please message if you have any
            questions!
          </p>
          <p className="text-md lg:text-lg lg:font-medium 2xl:text-xl pl-4">
            I'm passionate about building, maintaining and continuing to learn
            about the software field to develop solutions and products that help
            improve the lives of those around me. I'm constantly looking to
            learn and improve my skills as a developer to be as effective and
            impactful as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
