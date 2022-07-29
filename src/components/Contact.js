import React from "react";
//Import icon to use for styling


const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <div className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#9d0885] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Feel free to contact me with the form below or send me an email directly at eryanharris1@gmail.com. I look forward to hearing form you!</p>
        </div>
        <form action="GET">
          <label>
            Name:
            <input name='sendersName' type='text' placeholder='Name' />
          </label>
          <label>
            Email:
            <input name='sendersEmail' type='email' placeholder='Email' />
          </label>
          <label>
            Message:
            <textarea name="message" cols="30" rows="10" placeholder='Message'></textarea>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Contact;