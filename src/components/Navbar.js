import React, { useState } from 'react';
// import Logo from '../assets/logo.png';
import newCroppedLogo from '../assets/newCroppedLogo.png';
import Resume from '../assets/RyanHarris_Resume.pdf';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div className=''>
        <a href="/">
          <Link to="home" smooth={true} duration={500}>
            <img src={newCroppedLogo} alt="Ryan Harris website Logo" className='w-[180px] pr-[80px] pb-[10px]' />
          </Link>
        </a>
      </div>
      {/* style={{width: '90px', marginTop: '10px',  }} */}

      {/* Nav Links */}
      <ul className='hidden md:flex pt-[10px]'>
        <li className='hover:text-[#9d0885] duration-300 '>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:text-[#9d0885] duration-300 '>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:text-[#9d0885] duration-300 '>
          <Link to="technologies" smooth={true} duration={500}>
            Technologies
          </Link>
        </li>
        <li className='hover:text-[#9d0885] duration-300 '>
          <Link to="projects" smooth={true} duration={500} offset={50}>
            Projects
          </Link>
        </li>
        <li className='hover:text-[#9d0885] duration-300 '>
          <Link to="contact" smooth={true} duration={500} offset={-20}>
            Contact
          </Link>
        </li>
      </ul>


      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>


      {/* Mobile Nav Links */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
      <li className='hover:text-[#9d0885] duration-300 '>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:text-[#9d0885] duration-300 '>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:text-[#9d0885] duration-300 '>
          <Link onClick={handleClick} to="technologies" smooth={true} duration={500}>
            Technologies
          </Link>
        </li>
        <li className='hover:text-[#9d0885] duration-300 '>
          <Link onClick={handleClick} to="projects" smooth={true} duration={500} offset={50}>
            Projects
          </Link>
        </li>
        <li className='hover:text-[#9d0885] duration-300 '>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
              href={Resume} download='RyanHarris-Resume'>Resume<BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;