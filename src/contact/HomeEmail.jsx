import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const HomeEmail = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_n218kki";
    const templateId = "template_55a2qwq";
    const publicKey = "9w6bMEFaYfO-iLsvq";

    const templateParams = {
      from_email: email,
      to_name: "Anya Softek",
      message: "Enquiry for Anya Softek",
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert("Enquiry Sent Successfuly");
        setEmail("");
      })
      .catch((error) => {
        alert("Error sending email");
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // onChange={handleInputChange}
          placeholder="Enter your email"
          className="border border-gray-300 md:w-[750px] rounded-l-xl px-4 py-2 w-64px focus:outline-none focus:border-blue-500 sm:h-12"
        />
        <button
          type="submit"
          // onClick={handleButtonClick}
          className="bg-gradient-to-r  text-white font-bold sm:w-300px rounded-r-xl px-2 py-2 focus:outline-none sm:h-12"
          style={{
            background:
              "linear-gradient(180deg, #25A0FB 0%, #0886E3 0.01%, #68BFFF 72.4%, #B3DEFD 100%)",
          }}>
          Let's talk
        </button>
      </div>
    </form>
  );
};

export default HomeEmail;
