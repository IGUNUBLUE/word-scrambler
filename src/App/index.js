import NextButton from "../components/inputs/Button";
import "./_style.scss";

function App() {
  return (
    <div className="container">
      <div className="sentence"></div>
      <div className="message"></div>
      <div className="score"></div>
      <div className="keypad"></div>
      <NextButton name={"Next"} />
    </div>
  );
}

export default App;
