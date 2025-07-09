import React, { useState } from "react";

const Counter = () => {
  // logic

  //state라는 특별한 변수
  const [cntState, setCntState] = useState(0);
  const handleIncrease = () => {
    setCntState(cntState + 1);
  };

  const [cntDerease, setCntDecrease] = useState(0);
  const handleDecrease = () => {
    setCntDecrease(cntDerease - 1);
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
        <div> {cntDerease}</div>
        <button type="button" onClick={handleDecrease}>
          -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
