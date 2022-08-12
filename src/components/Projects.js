import React from "react";
import WebsiteScreen from '../assets/websiteScreen.png'


const Projects = () => {
  return (
    <div name='projects' className='w-full sm:h-screen bg-[#0a192f]'>
      <div className='max-w-[1400px] mx-auto flex flex-col justify-center w-full h-full pt-[130px]'>
        <div className='pb-8'>
          <p className='text-7xl font-bold inline border-b-4 text-[#ffffff] border-[#9d0885]'>Projects</p>
          <p className='py-8 text-gray-300 text-3xl'>{'// Check out some of my recent projects'}</p>
        </div>


        {/* GRID CONTAINER */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


          {/* FIRST PROJECT PREVIEW IMG */}
          <div 
            style={{ backgroundImage: `url(${WebsiteScreen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500'>

            {/* CONTAINER HOVER EFFECT */}
            <div className='opacity-0 group-hover:opacity-100 duration-[350ms]'>
              <span className='text-5xl font-bold text-white tracking-wide'>
                Portfolio Website
              </span>
              <p className='text-xl tracking-wide font-semibold flex justify-center py-3 text-white'>ReactJS &#x2022; Tailwind &#x2022; AWS</p>
              <div className='pt-8 text-center'>
                {/* <a 
                  href='/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-8 py-3 m-3 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>
                    Demo
                  </button>
                </a> */}
                <a 
                  href='https://github.com/Harris-Ryan/portfolio-website'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-8 py-3 m-3 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>



          {/* div to hide empty project containers */}
          <div className='hidden'>
            {/* SECOND PROJECT PREVIEW IMG */}
            <div
              style={{ backgroundImage: `url(${WebsiteScreen})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500'>
              {/* CONTAINER HOVER EFFECT */}
              <div className='opacity-0 group-hover:opacity-100 duration-[350ms]'>
                <span className='text-5xl font-bold text-white tracking-wide'>
                  Portfolio Website
                </span>
                <p className='text-xl tracking-wide font-semibold flex justify-center py-3 text-white'>ReactJS &#x2022; Tailwind &#x2022; AWS</p>
                <div className='pt-8 text-center'>
                  {/* <a
                    href='/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-8 py-3 m-3 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>
                      Demo
                    </button>
                  </a> */}
                  <a
                    href='https://github.com/Harris-Ryan/portfolio-website'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-8 py-3 m-3 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>


            {/* THIRD PROJECT PREVIEW IMG */}
            <div
              style={{ backgroundImage: `url(${WebsiteScreen})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500'>
              {/* CONTAINER HOVER EFFECT */}
              <div className='opacity-0 group-hover:opacity-100 duration-[350ms]'>
                <span className='text-5xl font-bold text-white tracking-wide'>
                  Portfolio Website
                </span>
                <p className='text-xl tracking-wide font-semibold flex justify-center py-3 text-white'>ReactJS &#x2022; Tailwind &#x2022; AWS</p>
                <div className='pt-8 text-center'>
                  {/* <a
                    href='/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-8 py-3 m-3 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>
                      Demo
                    </button>
                  </a> */}
                  <a
                    href='https://github.com/Harris-Ryan/portfolio-website'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-8 py-3 m-3 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>


            {/* FOURTH PROJECT PREVIEW IMG */}
            <div
              style={{ backgroundImage: `url(${WebsiteScreen})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500'>
              {/* CONTAINER HOVER EFFECT */}
              <div className='opacity-0 group-hover:opacity-100 duration-[350ms]'>
                <span className='text-5xl font-bold text-white tracking-wide'>
                  Portfolio Website
                </span>
                <p className='text-xl tracking-wide font-semibold flex justify-center py-3 text-white'>ReactJS &#x2022; Tailwind &#x2022; AWS</p>
                <div className='pt-8 text-center'>
                  {/* <a
                    href='/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-8 py-3 m-3 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>
                      Demo
                    </button>
                  </a> */}
                  <a
                    href='https://github.com/Harris-Ryan/portfolio-website'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-8 py-3 m-3 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>


            {/* FIFTH PROJECT PREVIEW IMG */}
            <div
              style={{ backgroundImage: `url(${WebsiteScreen})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500'>
              {/* CONTAINER HOVER EFFECT */}
              <div className='opacity-0 group-hover:opacity-100 duration-[350ms]'>
                <span className='text-5xl font-bold text-white tracking-wide'>
                  Portfolio Website
                </span>
                <p className='text-xl tracking-wide font-semibold flex justify-center py-3 text-white'>ReactJS &#x2022; Tailwind &#x2022; AWS</p>
                <div className='pt-8 text-center'>
                  {/* <a
                    href='/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-8 py-3 m-3 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>
                      Demo
                    </button>
                  </a> */}
                  <a
                    href='https://github.com/Harris-Ryan/portfolio-website'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-8 py-3 m-3 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>


            {/* SIXTH PROJECT PREVIEW IMG */}
            <div
              style={{ backgroundImage: `url(${WebsiteScreen})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500'>
              {/* CONTAINER HOVER EFFECT */}
              <div className='opacity-0 group-hover:opacity-100 duration-[350ms]'>
                <span className='text-5xl font-bold text-white tracking-wide'>
                  Portfolio Website
                </span>
                <p className='text-xl tracking-wide font-semibold flex justify-center py-3 text-white'>ReactJS &#x2022; Tailwind &#x2022; AWS</p>
                <div className='pt-8 text-center'>
                  {/* <a
                    href='/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-8 py-3 m-3 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>
                      Demo
                    </button>
                  </a> */}
                  <a
                    href='https://github.com/Harris-Ryan/portfolio-website'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-8 py-3 m-3 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;

