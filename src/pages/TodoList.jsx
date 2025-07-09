import React, { useState } from "react";

const TodoList = () => {
  const initialList = [
    {
      id: 1,
      text: "React이론",
    },
    {
      id: 2,
      text: "React학습",
    },
    {
      id: 3,
      text: "React실습",
    },
    {
      id: 4,
      text: "React테스트",
    },
    {
      id: 5,
      text: "React평가",
    },
    {
      id: 6,
      text: "React리뷰",
    },
  ];

  const [list, setList] = useState(initialList); // list는 객체로 이루어진 타입이고 동적변화감지를위해 state로 만들어서 초기화해준다

  const handleAdd = () => {
    const newItem = {
      id: list.length + 1,
      text: "리스트 렌더링",
    };

    //spread syntax(ES6문법)
    const resultList = [...list, newItem];
    setList(resultList);
  };

  return (
    <div>
      <ul>
        {
          //html코드에서 js 쓰고싶다며 중괄호{}쓰라
        }
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAdd}>
        {" "}
        아이템 추가
      </button>
    </div>
  );
};

export default TodoList;
