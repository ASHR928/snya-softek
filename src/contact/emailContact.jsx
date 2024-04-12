import React from "react";

const emailContact = () => {
  return (
    <div className="flex items-center">
      <input
        type="email"
        // value={email}
        // onChange={handleInputChange}
        placeholder="Enter your email"
        className="border border-gray-300 rounded-l-xl px-4 py-2 w-64 focus:outline-none focus:border-blue-500 sm:h-12"
        style={{ height: "60px" }}
      />
      <button
        // onClick={handleButtonClick}
        className="bg-gradient-to-r text-white font-bold rounded-r-xl px-4 py-2 focus:outline-none sm:h-12"
        style={{
          background:
            "linear-gradient(180deg, #25A0FB 0%, #0886E3 0.01%, #68BFFF 72.4%, #B3DEFD 100%)",
          height: "60px",
        }}>
        Let's talk
      </button>
    </div>
  );
};

export default emailContact;
