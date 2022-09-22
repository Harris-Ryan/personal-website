import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BiSend } from "react-icons/bi/";
import { email } from "../email";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tfyzndr",
        "template_vk293ar",
        form.current,
        "xulT6XixSTXm84dFc"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Woohoo!",
            iconColor: "white",
            icon: "success",
            text: "Message Sent Successfully!",
            showConfirmButton: false,
            toast: true,
            position: "top-right",
            timer: 2300,
            timerProgressBar: true,
            background: "#a5dc86",
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Whoops!",
            iconColor: "white",
            icon: "error",
            text: "Looks like something went wrong",
            showConfirmButton: false,
            toast: true,
            position: "top-right",
            timer: 2300,
            timerProgressBar: true,
            background: "#f27474",
          });
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center p-4 sm:p-8"
    >
      <div className="flex justify-center items-center flex-col sm:max-w-[70vw] xl:max-w-[55vw] pb-32">
        <div className="pb-8">
          <p className="text-4xl md:text-6xl font-bold inline text-white underline decoration-[3px] md:decoration-[4px] decoration-[#9d0885] underline-offset-4">
            Contact
          </p>
          <p className="text-gray-300 py-4 md:text-lg">
            I'm always open to new opportunities (and friends!). Feel free to
            contact me using the form below if you have any questions or if you
            just want to say hi! You can also send me an email directly{" "}
            <a
              className="font-medium underline underline-offset text-[#c831af] hover:text-gray-200 duration-200"
              href={`mailto:${email}`}
            >
              here
            </a>
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label>
            <input
              className="w-full py-2 pl-2 mb-3 rounded-md border-[2px] focus:outline-none focus:border-[#24b7f1]"
              name="senderName"
              type="text"
              placeholder="Name"
            />
          </label>
          <label className="py-3">
            <input
              className="w-full py-2 pl-2 mb-3 rounded-md border-[2px] focus:outline-none focus:border-[#24b7f1]"
              name="senderEmail"
              type="email"
              placeholder="Email"
            />
          </label>
          <label className="py-3">
            <textarea
              className="w-full py-3 pl-2 mb-3 rounded-md border-[2px] focus:outline-none focus:border-[#24b7f1]"
              name="message"
              cols="30"
              rows="7"
              placeholder="Message"
            ></textarea>
          </label>
          <div className="flex items-center justify-center">
            <button
              className="text-white border-2 px-3 py-2 p-4 my-2 rounded-md flex items-center hover:bg-[#9d0885] hover:border-[#9d0885] duration-300"
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
