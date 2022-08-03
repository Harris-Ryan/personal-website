import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => { 
  
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* Research into animation - idea is to have curly brackets with 'user' inside them, which then prints to 'Ryan' (make it look like state is changing) */}

        {/* Get new size of Raleway font - bolder ideally*/}
        <p className='pl-1 text-xl text-[#9d0885]'>Hi! My name is</p> 
        <h1 className='py-[1px] text-4xl sm:text-7xl font-semibold text-[#eaecf7]'>{`{Ryan}`}</h1>
        <h2 className='text-4xl sm:text-7xl font-medium text-[#a5a8b1]'>I'm your next Full Stack Engineer!</h2>
        <p className='text-[#d4d5d8] py-4 max-w-[700px]'>I specialize in creating exceptional user experiences through modern and well thoughtout design.</p>
        <div>
          <button className='text-white border-2 px-4 py-2 my-5 rounded-md flex items-center hover:bg-[#9d0885] hover:border-[#9d0885] duration-300 group'>
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              View Work
            </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};


export default Home;