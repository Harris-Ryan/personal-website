import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => { 
  
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* Research into animation - idea is to have curly brackets with 'user' inside them, which then prints to 'Ryan' (make it look like state is changing) */}

        {/* Get new size of Raleway font - bolder ideally*/}
        <p className='text-xl text-[#9d0885]'>Hi! My name is</p> 
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ryan Harris!</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm your next Full Stack Engineer!</h2>
        <p>I specialize in creating exceptional user experiences through modern and well thoughtout design.</p>
        <div>
          <button>View Work <HiArrowNarrowRight/></button>
        </div>
      </div>
    </div>
  );
};


export default Home;
