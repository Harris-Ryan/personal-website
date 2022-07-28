import React from "react";
import TypeScript from '../assets/typescript.png';
import MySQL from '../assets/mysql.png';
import ReactLogo from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Node from '../assets/node.png';
import Github from '../assets/github.png';

const Experience = () => {
  return (
    <div name='experience' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#9d0885]'>Technologies</p>
          <p className='py-4'>{'// Tehcnologies I\'m familiar with'}</p>
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 text-center py-7 gap-3'>
          <div className='shadow-lg shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500 pt-3'>
            <img className='w-20 mx-auto' src={ReactLogo} alt="React Logo" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500 pt-3'>
            <img className='w-20 mx-auto' src={TypeScript} alt="TypeScript Logo" />
            <p className='my-4'>TypeScript</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500 pt-3'>
            <img className='w-[120px] mx-auto' src={MySQL} alt="MySQL Logo" />
            <p className='my-4'>MySQL</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500 pt-3'>
            <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind Logo" />
            <p className='my-4'>Tailwind</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500 pt-3'>
            <img className='w-20 mx-auto' src={Node} alt="NodeJS Logo" />
            <p className='my-4'>Node</p>
          </div>
          <div className='shadow-lg shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500 pt-3'>
            <img className='w-20 mx-auto' src={Github} alt="Github Logo" />
            <p className='my-4'>Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;