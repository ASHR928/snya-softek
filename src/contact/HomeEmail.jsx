import React from "react";

const HomeEmail = () => {
  return (
    <div className="flex items-center">
      <input
        type="email"
        // value={email}
        // onChange={handleInputChange}
        placeholder="Enter your email"
        className="border border-gray-300 md:w-[750px] rounded-l-xl px-4 py-2 w-64px focus:outline-none focus:border-blue-500 sm:h-12"
      />
      <button
        // onClick={handleButtonClick}
        className="bg-gradient-to-r  text-white font-bold sm:w-300px rounded-r-xl px-2 py-2 focus:outline-none sm:h-12"
        style={{
          background:
            "linear-gradient(180deg, #25A0FB 0%, #0886E3 0.01%, #68BFFF 72.4%, #B3DEFD 100%)",
        }}>
        Let's talk
      </button>
    </div>
  );
};

export default HomeEmail;
