import React from "react";

const Greeting = () => {
  for (let i = 0; i > 5; i++) {
    console.log("hahah");
  }
  const userName1 = "hyerim";
  const textClass = "text-red";
  return (
    <div>
      <h1 className={`greeting-title ${textClass}`}>
        {" "}
        안녕하세요!!! {userName1}님{" "}
      </h1>
      Greeting
      <p>오늘도 시원한 하루되세요~ </p>
      Welcome to our website. <strong>We are glad you're here!</strong> Please
      enjoy exploring.
    </div>
  );
};

export default Greeting;
