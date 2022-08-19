import React from "react";


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1200px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-12 pl-4'>
            <p className='text-7xl font-bold inline border-b-4 border-[#9d0885] text-[#ffffff]'>
              About
            </p>
          </div>
        </div>
          <div className='max-w-[1300px] w-full grid sm:grid-cols-2 gap-8 px-5 text-[#bdbdbd] divide-x-[4px] divide-[#9d0885]'>
            <div className='text-right text-4xl font-bold'>
              Hi, I'm Ryan - nice to meet you! Please take a look around and message if you have any questions!
            </div>
            <div className='text-4xl font-normal text-[#ffffff] pl-[12px]'>
              I am passionate about building, maintaining and learning about software to build solutions that help improve the lives of those around me.
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;