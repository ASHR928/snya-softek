import React from "react";

const emailContact = () => {
  return (
    <div className="flex items-center">
      <input
        type="email"
        // value={email}
        // onChange={handleInputChange}
        placeholder="Enter your email"
        className="border border-gray-300 md:text-xl text-sm rounded-l-xl px-4 py-2 md:w-[80%] md:h-[70px] w-[50%] h-[30px]  focus:outline-none focus:border-blue-500 sm:h-12"
      />
      <button
        // onClick={handleButtonClick}
        className="bg-gradient-to-r text-white md:text-xl text-xxs font-bold md:w-[35%] w-[19%] md:h-[70px] h-[30px] rounded-r-xl    mdpx-4 md:py-2 focus:outline-none sm:h-12"
        style={{
          background:
            "linear-gradient(180deg, #25A0FB 0%, #0886E3 0.01%, #68BFFF 72.4%, #B3DEFD 100%)",
        }}>
        Let's talk
      </button>
    </div>
  );
};

export default emailContact;
