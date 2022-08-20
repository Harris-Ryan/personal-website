import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BiSend } from "react-icons/bi/";
import { email } from "../secretsConfig";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text); //Put the success alert here
          e.target.reset();
        },
        (error) => {
          console.log(error.text); //Put the fail alert here
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-[200px] pb-[100px]"
    >
      <div className="flex flex-col max-w-[1200px] w-full">
        <div className="pb-8 text-center">
          <p className="text-7xl font-bold inline border-b-4 border-[#9d0885] text-[#ffffff]">
            Contact
          </p>
          <p className="text-gray-300 mt-[50px] text-2xl text-center px-[100px]">
            I'm always open to new opportunities (and friends!!) - Feel free to
            contact me with the form below if you have any questions or if you
            just want to say hi! You can also send me an email directly{" "}
            <a
              className="font-medium underline underline-offset text-[#c831af] hover:text-gray-200 duration-200"
              href={`mailto:${email}`}
            >
              here
            </a>
          </p>
        </div>
        <form
          className="flex flex-col px-[160px]"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="py-3">
            <input
              className="w-full py-3 pl-2 rounded-md border-[2px] focus:outline-none focus:border-[#24b7f1]"
              name="senderName"
              type="text"
              placeholder="Name"
            />
          </label>
          <label className="py-3">
            <input
              className="w-full py-3 pl-2 rounded-md border-[2px] focus:outline-none focus:border-[#24b7f1]"
              name="senderEmail"
              type="email"
              placeholder="Email"
            />
          </label>
          <label className="py-3">
            <textarea
              className="w-full py-3 pl-2 rounded-md border-[2px] focus:outline-none focus:border-[#24b7f1]"
              name="message"
              cols="30"
              rows="7"
              placeholder="Message"
            ></textarea>
          </label>
          <div className="flex items-center justify-center">
            <button
              className="text-white border-2 px-7 py-4 my-5 rounded-md flex items-center hover:bg-[#9d0885] hover:border-[#9d0885] duration-300"
              type="submit"
            >
              Send Message
              <BiSend className="w-7 pl-3 float-right" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
