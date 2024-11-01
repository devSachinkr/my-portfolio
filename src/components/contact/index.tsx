import React from "react";
import GradientText from "../global/GradientText";
import Girl from "../../../assets/contactGirl.png";
import Image from "next/image";
import ContactForm from "../global/form/contact";
const Contact = () => {
  return (
    <section className="container w-screen overflow-hidden overflow-x-hidden  mb-4">
      <h1 className="flex items-center justify-center w-full text-6xl font-semibold ">
        <GradientText
          className="from-purple-800 via-fuchsia-500 to-purple-800 p-5"
          classes="md:text-[5rem]  font-semibold"
        >
          Contact
        </GradientText>
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-4 ">
        <article className="flex items-center justify-center md:w-[50%] container p-5 mb-2   relative h-[44vh] md:h-[60vh] lg:h-[80vh] ">
          <div className="md:w-96 md:h-96 h-52 w-52 absolute bg-white rounded-full aspect-square -z-10 bg-gradient-to-bl  from-purple-600 via-lime-800 to-blue-600 blur-[100px]" />
          <Image
            src={Girl}
            alt="Contact US Image "
            className="h-[34vh] w-[34vw] md:h-[58vh] md:w-[58vh] lg:h-[70vh] lg:w-[70vh] rounded-full z-50"
          />
        </article>
        <article className="flex items-center justify-center md:w-[50%] container p-5 mb-2 ">
          <ContactForm />
        </article>
      </div>
    </section>
  );
};

export default Contact;
