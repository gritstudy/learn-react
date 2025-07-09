import React from "react";
import Button from "./Button";

const Greeting = ({ userName }) => {
  //   for (let i = 0; i > 5; i++) {
  //     console.log("hahah");
  //   }
  //   const userName1 = "hyerim";
  const textClass = "text-red";
  const handleClick = (data) => {
    console.log("🚀 ~ handleClick ~ data:", data);
    // if (data == "naver") {
    //   //move to naver
    //   window.open("https://www.naver.com/");
    // } else {
    //   window.open("https://www.google.com/");
    // }

    //삼항연산자
    window.open(
      data == "naver" ? "https://www.naver.com/" : "https://www.google.com"
    );
  };
  return (
    <div>
      <h1 className={`greeting-title ${textClass}`}>
        {" "}
        안녕하세요!!! {userName}님{" "}
      </h1>
      Greeting
      <p>오늘도 시원한 하루되세요~ </p>
      <Button
        link="https://www.naver.com/"
        text="naver"
        onClick={handleClick}
      />
      <Button
        link="https://www.google.com/"
        text="google"
        onClick={handleClick}
      />
      Welcome to our website. <strong>We are glad you're here!</strong> Please
      enjoy exploring.
    </div>
  );
};

export default Greeting;
