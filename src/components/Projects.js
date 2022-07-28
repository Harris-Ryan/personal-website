import React from "react";
// import images for each project 
import WebsiteScreen from '../assets/websiteScreen.png'
import WorkImg from '../assets/workImg.jpeg';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#9d0885]'>Projects</p>
          <p className='py-6'>Check out some of my recent projects</p>
        </div>


        {/* GRID CONTAINER */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


          {/* FIRST PROJECT PREVIEW IMG */}
          <div 
            style={{backgroundImage: `url(${WebsiteScreen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500'>

            {/* CONTAINER HOVER EFFECT */}
            <div className='opacity-0 group-hover:opacity-100 duration-[350ms]'>
              <span className='text-3xl font-bold text-white tracking-wide'>
                Portfolio Website
              </span>
              <p className='text-xs tracking-wide font-semibold flex justify-center my-3 text-white'>React &#x2022; Tailwind</p>
              <div className='pt-8 text-center'>
                {/* <a href="/">
                  <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>Demo</button>
                </a> */}
                <a href="/">
                  <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* SECOND PROJECT PREVIEW IMG */}
          <div 
            style={{backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500'>

            {/* CONTAINER HOVER EFFECT */}
            <div className='opacity-0 group-hover:opacity-100 duration-[350ms]'>
              <span className='text-3xl font-bold text-white tracking-wide'>
                Resume Creator
              </span>
              <p className='text-xs tracking-wide font-semibold flex justify-center my-3 text-white'>React &#x2022; Bootstrap</p>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>Code</button>
                </a>
              </div>
            </div>
          </div>
          
          {/* THIRD PROJECT PREVIEW IMG */}
          <div 
            style={{backgroundImage: `url(${WebsiteScreen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500'>

            {/* CONTAINER HOVER EFFECT */}
            <div className='opacity-0 group-hover:opacity-100 duration-[350ms]'>
              <span className='text-3xl font-bold text-white tracking-wide'>
                "Project Name"
              </span>
              <p className='text-xs tracking-wide font-semibold flex justify-center my-3 text-white'>Tech-1 &#x2022; Tech-2 &#x2022; Tech-3 &#x2022; Tech-4</p>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>Code</button>
                </a>
              </div>
            </div>
          </div>
          
          {/* FOURTH PROJECT PREVIEW IMG */}
          <div 
            style={{backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500'>

            {/* CONTAINER HOVER EFFECT */}
            <div className='opacity-0 group-hover:opacity-100 duration-[350ms]'>
              <span className='text-3xl font-bold text-white tracking-wide'>
                "Project Name"
              </span>
              <p className='text-xs tracking-wide font-semibold flex justify-center my-3 text-white'>Tech-1 &#x2022; Tech-2 &#x2022; Tech-3 &#x2022; Tech-4</p>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>Code</button>
                </a>
              </div>
            </div>
          </div>
          
          {/* FIFTH PROJECT PREVIEW IMG */}
          <div 
            style={{backgroundImage: `url(${WebsiteScreen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500'>

            {/* CONTAINER HOVER EFFECT */}
            <div className='opacity-0 group-hover:opacity-100 duration-[350ms]'>
              <span className='text-3xl font-bold text-white tracking-wide'>
                "Project Name"
              </span>
              <p className='text-xs tracking-wide font-semibold flex justify-center my-3 text-white'>Tech-1 &#x2022; Tech-2 &#x2022; Tech-3 &#x2022; Tech-4</p>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>Code</button>
                </a>
              </div>
            </div>
          </div>
          
          {/* SIXTH PROJECT PREVIEW IMG */}
          <div 
            style={{backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div duration-500'>

            {/* CONTAINER HOVER EFFECT */}
            <div className='opacity-0 group-hover:opacity-100 duration-[350ms]'>
              <span className='text-3xl font-bold text-white tracking-wide'>
                "Project Name"
              </span>
              <p className='text-xs tracking-wide font-semibold flex justify-center my-3 text-white'>Tech-1 &#x2022; Tech-2 &#x2022; Tech-3 &#x2022; Tech-4</p>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-5 py-2 m-2 bg-white text-[#403b3f] font-bold text-lg hover:bg-[#403b3f] hover:text-white duration-300'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;

