import React, { useState } from 'react';
import Logo from '../assets/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="My Logo" style={{width: '110px', paddingTop: '10px'}}/>
      </div>

      {/* Nav Links */}
      <ul className='hidden md:flex pt-[10px]'>
        <li className='hover:text-[#9d0885] duration-300 '>Home</li>
        <li className='hover:text-[#9d0885] duration-300'>About</li>
        <li className='hover:text-[#9d0885] duration-300'>Technologies</li>
        <li className='hover:text-[#9d0885] duration-300'>Projects</li>
        <li className='hover:text-[#9d0885] duration-300'>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Nav Links */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Projects</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* Social Links */}
      <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="/"> LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#6F3CB7]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="/"> Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#34B7CA]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="/"> E-Mail <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#4E4E4F]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="/"> Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;