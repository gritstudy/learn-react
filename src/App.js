import Card from "./components/Card";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="card-wrap">
      hello world
      <Greeting />;
      <Counter />;
      <Card />;
      <Card />;
    </div>
  );
}

export default App;
