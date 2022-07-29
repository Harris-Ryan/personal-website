import React from "react";
//Import icon to use for styling

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <div className='flex flex-col max-w-[750px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#9d0885] text-gray-200'>Contact</p>
          <p className='text-gray-300 py-2 pt-6'>Feel free to contact me with the form below or send me an email directly at <i><u><b><a href="mailto: eryanharris1@gmail.com">eryanharris1@gmail.com</a></b></u></i></p>
          {/* <p className='text-gray-300'>I look forward to hearing from you!</p> */}
        </div>
        <form className='flex flex-col'>
          <label className='py-3 text-gray-300'>
            Name
            <input className='w-full py-1 pl-1' name='sendersName' type='text'  />
          </label>
          <label className='py-3 text-gray-300'>
            Email
            <input className='w-full py-1' name='sendersEmail' type='email'  />
          </label>
          <label className='py-3 text-gray-300'>
            Message
            <textarea className='w-full py-1' name="message" cols="30" rows="7" ></textarea>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Contact;