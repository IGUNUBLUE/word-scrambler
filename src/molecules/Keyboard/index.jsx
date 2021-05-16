import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getData, setScore } from "../../redux/actions";
import handleNextInput from "../../utils/handleNextInput";
import Div from "../../atoms/Div";
import Button from "../../atoms/Button";
import Key from "../../atoms/Key";
import Space from "../../atoms/Space";
import "./_style.scss";

function Keyboard(props) {
  const sentence = useSelector((state) => state.sentence);
  const score = useSelector((state) => state.score);
  const dispatch = useDispatch();
  const [showNext, setShowNext] = useState(false);
  // first focus
  const firstFocus = useCallback(
    (input) => {
      if (input) {
        input.focus();
        // creating the ref
        props.memoRefs[0][0].current = input;
      }
    },
    [props.memoRefs]
  );
  // Next sentence
  function handleSubmit(event) {
    event.preventDefault();
    if (sentence.number <= 10) {
      event.target.reset();
      if(sentence.number + 1 <= 10) dispatch(getData(sentence.number + 1));
      dispatch(setScore(score + 1));
      setShowNext(false);
    }
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <Div
        class="keyboard-body"
        content={
          // rows (words)
          props.sentenceArray.map((word, iRow, aRow) => (
            <Div
              key={iRow}
              class="row"
              content={
                //columns (letters)
                word.map((letter, iCol) => {
                  return letter !== " " ? (
                    <Key
                      key={`${iRow}${iCol}`}
                      keyValue={props.sentenceArray[iRow][iCol]}
                      ref={
                        // focus an ref just the first letter
                        iRow === 0 && iCol === 0
                          ? (input) => {
                              firstFocus(input);
                            } // references for the other letters
                          : props.memoRefs[iRow][iCol]
                      }
                      // next letter
                      handleNextInput={() =>
                        setShowNext(
                          handleNextInput(
                            iRow,
                            iCol,
                            props.sentenceArray,
                            props.memoRefs
                          )
                        )
                      }
                    />
                  ) : // Don't write space in last row (word) and last column (letter)
                  iRow !== aRow.length - 1 ? (
                    <Space
                      key={`${iRow}${iCol}`}
                      keyValue={`_${iRow}`}
                      ref={props.memoRefs[iRow][iCol]}
                      handleNextInput={() =>
                        setShowNext(
                          handleNextInput(
                            iRow,
                            iCol,
                            props.sentenceArray,
                            props.memoRefs
                          )
                        )
                      }
                    />
                  ) : null;
                })
              }
            />
          ))
        }
      />
      {/* handleNextInput response verification, true: show */}
      {showNext ? (
        <Div
          class="nextContainer"
          content={<Button type="submit" text="Next" class="next" />}
        />
      ) : null}
    </form>
  );
}

export default Keyboard;
