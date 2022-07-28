import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => { 
  
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* Research into animation - idea is to have curly brackets with 'user' inside them, which then prints to 'Ryan' (make it look like state is changing) */}

        {/* Get new size of Raleway font - bolder ideally*/}
        <p className='text-xl text-[#9d0885]'>Hi! My name is</p> 
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>{`{Ryan}`}</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm your next Full Stack Engineer!</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I specialize in creating exceptional user experiences through modern and well thoughtout design.</p>
        <div>
          <button className='text-white border-2 px-4 py-2 my-5 flex items-center hover:bg-[#9d0885] hover:border-[#9d0885] duration-300 group'>View Work
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