import { useEffect, useState } from "react";

import getData from "../../API/getData";
import Sentences from "../../molecules/Sentences";
import Instructions from "../../molecules/Instructions";
import Score from "../../molecules/Score";
import Keyboard from "../../molecules/Keyboard";
import Next from "../../molecules/Next";
import "./_style.scss";

// My intention with the comments is to explain a little.
// This was a challenge for me! I learned a lot of new things ... thank you for your advices...!!

function App() {
  const [sentence, setSentence] = useState({});
  // Requesting first sentence
  useEffect(() => {
    getData(1).then((res) => setSentence({ text: res, number: 1 }));
  }, []);

  function handleGetData(n) {
    getData(n).then((res) => setSentence({ text: res, number: n }));
  }

  return (
    <div className="container">
      <Sentences sentence={sentence.text} />
      <Instructions />
      <Score number={sentence.number} />
      <Keyboard sentence={sentence.text} />
      <Next getData={handleGetData} number={sentence.number} />
    </div>
  );
}

export default App;
