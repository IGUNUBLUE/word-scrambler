import Sentence from "../../molecules/Sentence";
import Instructions from "../../molecules/Instructions";
import "./_style.scss";

function App() {
  return (
    <div className="container">
      <Sentence />
      <Instructions />
      <div className="score"></div>
      <div className="keypad"></div>
    </div>
  );
}

export default App;
