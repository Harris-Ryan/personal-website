import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.minimal.css'; 
import { BiSend } from 'react-icons/bi/'

const Contact = () => {

  // const notifySuccess = () => toast.success("Message sent successfully", { position: toast.POSITION.TOP_RIGHT });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xyvicb4', 'template_vk293ar', form.current, 'tsMrUdUmSLg71uIWS')
      .then((result) => {
          console.log(result.text); //Put the success alert here
          toast.success("Message sent successfully", { position: toast.POSITION.TOP_RIGHT });
          e.target.reset();
      }, (error) => {
          console.log(error.text); //Put the fail alert here
      });
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-[50px]'>
      <div className='flex flex-col max-w-[1200px] w-full'>
        <div className='pb-8 text-center'>
          <p className='text-7xl font-bold inline border-b-4 border-[#9d0885] text-[#ffffff]'>Contact</p>
          <p className='text-gray-300 mt-[50px] text-xl text-left px-[120px]'>I'm always open to new opportunities (and friends!) - Feel free to contact me with the form below if you have any questions or you just want to say hi! You can also send me an email directly at 
            <a 
              className='font-medium underline underline-offset-1 text-[#c831af] hover:text-gray-200 duration-200'
              href="mailto: eryanharris1@gmail.com"> eryanharris1@gmail.com
            </a>
          </p>
          {/* <p className='text-gray-300'>I look forward to hearing from you!</p> */}
        </div>
        <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
          <label className='py-3'>
            <input className='w-full py-2 pl-2 rounded-md border-[2px] focus:outline-none focus:border-[#24b7f1]' name='senderName' type='text' placeholder='Name' />
          </label>
          <label className='py-3'>
            <input className='w-full py-2 pl-2 rounded-md border-[2px] focus:outline-none focus:border-[#24b7f1]' name='senderEmail' type='email' placeholder='Email' />
          </label>
          <label className='py-3'>
            <textarea className='w-full py-2 pl-2 rounded-md border-[2px] focus:outline-none focus:border-[#24b7f1]' name="message" cols="30" rows="7" placeholder='Message'> 
            </textarea>
          </label>
          <div className='flex items-center justify-center'>
            <button 
              className='text-white border-2 px-7 py-4 my-5 rounded-md flex items-center hover:bg-[#9d0885] hover:border-[#9d0885] duration-300' type='submit'>
              Send Message
              <BiSend className='w-7 pl-3 float-right' />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;