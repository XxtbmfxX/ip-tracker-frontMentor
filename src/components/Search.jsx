import React from "react";

import BtnSymbol from "../images/icon-arrow.svg";

const Search = ({ handleIpSubmit, handleChange, userIp, handleClick }) => {
  return (
    <form
      onSubmit={handleIpSubmit}
      className="mt-7 mb-32 w-full flex items-center  justify-center "
    >
      <input
        type="text"
        name="ipAddress"
        className=" w-4/5 p-3  h-12 rounded-tl-lg rounded-bl-lg
        cursor-pointer
        "
        onChange={handleChange}
        placeholder={userIp.ip}
      />
      <button
        type="submit"
        className="bg-black  h-12 w-10  text-white rounded-tr-lg  flex items-center justify-center  rounded-br-lg
        hover:bg-gray-700

        "
        onClick={handleClick}
      >
        <img className=" " src={BtnSymbol} alt="" />
      </button>
    </form>
  );
};

export default Search;
