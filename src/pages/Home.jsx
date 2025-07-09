import Move from "./Move";
import TodoList from "./TodoList";

const Home = () => {
  //logic
  //   const [step, setStep] = useState("");
  //   const [userName, setUserName] = useState("");

  //   const userStep = () => {
  //     const userNum = prompt("숫자의 간격을 입력해주세요.");
  //     setStep(userNum);
  //   };

  //   useEffect(() => {
  //     // 컴포넌트가 생성되었을 때 딱 한번 실행
  //     // 미션 1-1: 사용자의 이름 입력받기
  //     const userName = prompt("이름을 입력해주세요.");
  //     setUserName(userName);
  //   }, []);
  //view
  return (
    <div>
      <div>
        Home
        <TodoList />
        <Move />
        {/* <Greeting userName={userName} />
        <Counter step={step} />
        <button type="button" onClick={userStep}>
          간격
        </button> */}
      </div>
      <div className="card-wrap">
        {/* <Card />
        <Card /> */}
      </div>
    </div>
  );
};

export default Home;
