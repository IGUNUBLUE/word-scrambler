import { useEffect, useState } from "react";
import getData from "../../API/getData";

import Sentences from "../../molecules/Sentences";
import Instructions from "../../molecules/Instructions";
import Score from "../../molecules/Score";
import Keyboard from "../../molecules/Keyboard";
import Next from "../../molecules/Next";
import "./_style.scss";

// My intention with the comments is to make it as clear as possible.
// Apologies for leaving my code above without comment.

function App() {
  const [sentence, setSentence] = useState({});
  // Requesting first sentence
  useEffect(() => {
    getData(1).then((res) => setSentence({ text: res, number: 1 }));
  }, []);

  return (
    <div className="container">
      <Sentences sentence={sentence.text} />
      <Instructions />
      <Score number={sentence.number} />
      <Keyboard sentence={ sentence.text}/>
      <Next />
    </div>
  );
}

export default App;
