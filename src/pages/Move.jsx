import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Move = () => {
  //React Router Dom 으로 페이지 이동하는 방법두가지
  //l. Link
  //2. Navigate
  const history = useNavigate();
  const handlePageMove = () => {
    //페이지 이동
    history("/contact");
  };
  const handlePageMoveHome = () => {
    //페이지 이동
    history("/");
  };
  return (
    <div>
      <Link to={"/about"}> About</Link>
      <button type="button" onClick={handlePageMove()}>
        Contact
      </button>
      <button type="button" onClick={handlePageMoveHome()}>
        Home
      </button>
    </div>
  );
};

export default Move;
