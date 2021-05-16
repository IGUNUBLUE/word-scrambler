import { useEffect } from "react";
import { getData } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import MemorizeRefs from "../../organisms/MemorizeRefs";
import "./_style.scss";

// My intention with the comments is to explain a little.
// This was a challenge for me! I learned a lot of new things ... thank you for your advices...!!

function App() {
  const dispatch = useDispatch();
  const sentence = useSelector((state) => state.sentence);
  const score = useSelector((state) => state.score);
  // Requesting first sentence
  useEffect(() => {
    dispatch(getData(sentence.number));
  }, [dispatch, sentence.number]);

  if (score < 10) {
    return (
      <div className="container">
        <MemorizeRefs />
      </div>
    );
  } else {
    return <div className="container">you win!!</div>;
  }
}

export default App;
