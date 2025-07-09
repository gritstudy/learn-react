import React, { useState } from "react";

const Counter = ({ step }) => {
  // logic

  //state라는 특별한 변수 [데이터, 함수] , 순서가 중요하다.
  const [cntState, setCntState] = useState(0);

  //배열로 된 구조분해 할당
  const animals = ["개", "고양이", "올빼미"];
  //미션: 각각의 값들을 구조분해할당으로 뽑아와서콘솔에 뿌리기
  const [dog, cat, owl] = animals;
  //   console.log("🚀 ~ Counter ~ owl:", owl);
  //   console.log("🚀 ~ Counter ~ cat:", cat);
  //   console.log("🚀 ~ Counter ~ dog:", dog);

  const handleIncrease = () => {
    console.log(`+${step}`);

    // setCntState(cntState + 1);
    setCntState(cntState + step);
  };

  //  const [cntDerease, setCntDecrease] = useState(0);
  const handleDecrease = () => {
    // setCntDecrease(cntDerease - 1);
    setCntState((prev) => prev - step);
  };

  //   const userStep = () => {
  //     const number = prompt("숫자 몇 칸씩 증감시킬지 입력해주세요.");
  //     console.log("🚀 ~ userStep ~ number:", number);
  //   };
  //view
  return (
    <div>
      <h1>Counter</h1>
      <div style={{ fontSize: "20px" }}> </div>
      <div>{cntState}</div>
      <div>
        <button type="button" onClick={handleIncrease}>
          1
        </button>
        {/* <div> {cntDerease}</div> */}
        <button type="button" onClick={handleDecrease}>
          -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
