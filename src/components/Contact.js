import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xyvicb4', 'template_vk293ar', form.current, 'tsMrUdUmSLg71uIWS')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-[50px]'>
      <div className='flex flex-col max-w-[750px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#9d0885] text-gray-200'>Contact</p>
          <p className='text-gray-300 py-2 mt-12'>Feel free to contact me with the form below or send me an email directly at <a 
              className='font-medium underline underline-offset-1 text-[#c831af] hover:text-gray-200 duration-200'
              href="mailto: eryanharris1@gmail.com"> eryanharris1@gmail.com
            </a>
          </p>
          {/* <p className='text-gray-300'>I look forward to hearing from you!</p> */}
        </div>
        <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
          <label className='py-3'>
            <input className='w-full py-1 pl-2 rounded-md border-[1.7px] focus:outline-none focus:border-[#24b7f1]' name='senderName' type='text' placeholder='Name' />
          </label>
          <label className='py-3'>
            <input className='w-full py-1 pl-2 rounded-md border-[1.7px] focus:outline-none focus:border-[#24b7f1]' name='senderEmail' type='email' placeholder='Email' />
          </label>
          <label className='py-3'>
            <textarea className='w-full py-1 pl-2 rounded-md border-[1.7px] focus:outline-none focus:border-[#24b7f1]' name="message" cols="30" rows="7" placeholder='Message'> 
            </textarea>
          </label>
          <div className='flex items-center justify-center'>
            <button className='text-white px-4 py-2 my-5 w-[146px] border-[1px] border-white rounded-md inline-flex items-center hover:bg-[#9d0885] hover:shadow-outline hover:border-1 duration-300' type='submit'>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;