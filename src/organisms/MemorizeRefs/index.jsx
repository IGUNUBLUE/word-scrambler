import { useMemo, useState, createRef, useEffect } from "react";
import { useSelector } from "react-redux";

import makeArray from "../../utils/makeArray";
import Sentences from "../../molecules/Sentences";
import Instructions from "../../molecules/Instructions";
import Score from "../../molecules/Score";
import Keyboard from "../../molecules/Keyboard";

function MemorizeRefs() {
  const sentence = useSelector((state) => state.sentence)
  const [sentenceArray, setSentenceArray] = useState([]);
  // Creating and memorizing multiple references
  const refs = useMemo(
    () =>
      Array(sentenceArray.length)
        .fill()
        .map((_, i) =>
          Array(sentenceArray[i].length)
            .fill()
            .map((_, j) => createRef())
        ),
    [sentenceArray]
  );
  // Creating the matrix of rows (words) and columns (letters)
  useEffect(() => {
    if (sentence.text)
      setSentenceArray(makeArray(sentence.text.toLowerCase()));
  }, [sentence.text]);

  return (
    <>
      <Sentences />
      <Instructions />
      <Score />
      <Keyboard
        sentenceArray={sentenceArray}
        // numberSentence={sentence.number}
        memoRefs={refs}
        // score={score}
      />
    </>
  );
}

export default MemorizeRefs;
