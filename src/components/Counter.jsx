import React, { useState } from "react";

const Counter = () => {
  // logic

  //state라는 특별한 변수
  const [cntState, setCntState] = useState(0);
  const handleIncrease = () => {
    setCntState(cntState + 1);
    console.log("+1", cnt);
  };

  //view
  return (
    <div>
      <h1>Counter</h1>
      <div style={{ fontSize: "20px" }}> 0 </div>
      <div>{cntState}</div>
      <div>
        <button type="button" onClick={handleIncrease}>
          1
        </button>
        <button type="button">-1</button>
      </div>
    </div>
  );
};

export default Counter;
