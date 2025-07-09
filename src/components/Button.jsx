import React from "react";

const button = ({ link, text, onClick }) => {
  const handleClick = () => {
    console.log("CLick");
    onClick(text);
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {" "}
        {text}{" "}
      </button>
    </div>
  );
};

export default button;
