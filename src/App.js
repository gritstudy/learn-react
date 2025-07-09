import Card from "./components/Card";
import Greeting from "./components/Greeting";

function App() {
  // for (let i = 0; i > 5; i++) {
  //   <Card />;
  // }
  return (
    <div className="wrap">
      hello world
      <Greeting />;
      <Card />;
      <Card />;
    </div>
  );
}

export default App;
