import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import TypeWriterEffect from 'react-typewriter-effect';


const Home = () => { 
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1300px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='pl-1 text-4xl text-[#9d0885] font-normal'>Hi! My name is</p> 
          <h1 className='py-[10px] pb-[5px] text-8xl sm:text-8xl font-semibold text-[#ffffff] tracking-wide'>
          <TypeWriterEffect
            startDelay={100}
            cursorColor="#ffffff"
            multiText={[
              '{user}',
              'Ryan',
            ]}
            multiTextDelay={1300}
            typeSpeed={300}
            hideCursorAfterText='true'
          />
          </h1>
        <h2 className='pt-[5px] text-4xl sm:text-7xl font-medium text-[#a5a8b1]'>I'm your next Full Stack Engineer!</h2>
        <p className='text-[#d4d5d8] py-4 max-w-[700px] text-2xl'>
          I specialize in creating exceptional user experiences through modern and well thoughtout design.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500} offset={170}>
            <button className='text-white border-2 px-8 py-3 my-5 rounded-md flex items-center hover:bg-[#9d0885] hover:border-[#9d0885] duration-300 group'>
                View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Home;