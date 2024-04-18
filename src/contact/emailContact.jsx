import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const emailContact = () => {
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
          placeholder="Enter your email"
          className="border border-gray-300 md:text-xl text-[7px] md:rounded-l-xl rounded-l-xl px-4 py-2 md:w-[80%] md:h-[70px] w-[60%] h-[20px]  focus:outline-none focus:border-blue-500 sm:h-12"
        />
        <button
          type="submit"
          className="bg-gradient-to-r text-white md:text-xl text-[5px] font-bold md:w-[35%] w-[28%] md:h-[70px] h-[20px] rounded-r-xl    mdpx-4 md:py-2 focus:outline-none sm:h-12"
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

export default emailContact;
