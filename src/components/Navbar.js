import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Resume from '../assets/RyanHarris_Resume.pdf';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { RiGithubLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <a href="/">
          <Link to="home" smooth={true} duration={500}>
            <img src={Logo} alt="Ryan Harris website Logo" className='w-[170px] px-[25px] py-[50px]' />
          </Link>
        </a>
      </div>
      {/* style={{width: '90px', marginTop: '10px',  }} */}

      {/* Nav Links */}
      <ul className='hidden md:flex pt-[10px] text-xl'>
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
          <Link to="projects" smooth={true} duration={500} offset={200}>
            Projects
          </Link>
        </li>
        <li className='hover:text-[#9d0885] duration-300 '>
          <Link to="contact" smooth={true} duration={500}>
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
      <div className='hidden md:flex fixed flex-col top-[45%] left-1'>
        <ul className='social-links'>
          <li className='w-[150px] h-[50px] mb-[5px] flex justify-between items-center social-link'>
            <a className='flex justify-between items-center w-full text-gray-300 social-name'
              href='https://www.linkedin.com/in/e-ryan-harris' 
              target='_blank'
              rel='noreferrer'
              aria-label='Linkedin Profile'> 
              <AiOutlineLinkedin size={40}/>
                <span className='pr-[5px] fade-text'>LinkedIn</span>
            </a>
          </li>
          <li className='w-[150px] h-[50px] mb-[5px] flex justify-between social-link'>
            <a className='flex justify-between items-center w-full text-gray-300 social-name'
              href='https://github.com/Harris-Ryan' 
              target='_blank'
              rel='noreferrer'
              aria-label='Github Profile'> 
              <RiGithubLine size={40}/>
                <span className='pr-[20px] fade-text'>Github</span>
            </a>
          </li>
          <li className='w-[150px] h-[50px] mb-[5px] flex justify-between social-link'>
            <a className='flex justify-between items-center w-full text-gray-300 social-name'
              href={Resume} download='RyanHarris-Resume'>
              <BsPerson size={40}/>
              <span className='pr-[10px] fade-text'>Resume</span>
            </a>
          </li>
          <li className='w-[150px] h-[50px] mb-[5px] flex justify-between social-link'>
            <a className='flex justify-between items-center w-full text-gray-300 social-name'
              href="mailto: eryanharris1@gmail.com">
              <HiOutlineMail size={40}/>
              <span className='pr-[21px] fade-text'>E-Mail</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;