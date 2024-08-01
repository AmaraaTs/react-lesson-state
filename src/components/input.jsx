import React, { useState } from "react";

const Input = ({ handleChange }) => {
  const changeValue = (e) => {
    handleChange(e.target.value);
  };

  // const handleClick = (e) => {
  // console.log("clicked");
  // setSearchValue(value);
  // };
  return (
    <div>
      <input
        type="text"
        className="border border-gray-400"
        onChange={changeValue}
      />
      ;
    </div>
  );
};

export default Input;
