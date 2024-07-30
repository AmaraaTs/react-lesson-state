import React, { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    console.log(e.target.value);
    setSearchValue(value);
  };
  return (
    <div>
      <input
        type="text"
        className="border border-gray-400"
        onChange={handleChange}
      />
      ;<p>Search value: {searchValue}</p>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Input;
