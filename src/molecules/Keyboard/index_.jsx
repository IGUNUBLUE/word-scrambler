import useKey from "@accessible/use-key";
import { useRef } from "react";
import Div from "../../atoms/Div";
import Key from "../../atoms/Key/index_";
import "./_style.scss";

function Keyboard(props) {
  // const position = useRef(0);
  // Converting the sentence into an array of words
  let words;
  if (props.sentence) words = props.sentence.split(" ");
  //multi references
  const keyReferences = useRef({});
  // keyReferences.current = [];
  // function addToRef(element) {
  //   if (element && !keyReferences.current.includes(element)) {
  //     keyReferences.current.push(element);
  //   }
  //   // focusing on the first letter
  //   if (keyReferences.current[0]) {
  //     keyReferences.current[0].focus();
  //   }
  // }
  // Creating an object with the letters as key and the refs as value

  let oLetters = {};
  // if (props.sentence) {
  //   props.sentence
  //     .split("")
  //     .forEach((e, i) => (oLetters[e] = keyReferences.current[i])); //letters array
  // }

  // if (keyReferences.current[0]) keyReferences.current[0].focus()

  useKey(window, {
    Backspace: () => console.log(oLetters),
  });

  function forwardKey(keyPosition) {
    // console.log(keyReferences.current[keyPosition])
    keyReferences.current[keyPosition - 1].focus();
    // position.current = keyPosition;
    console.log(keyReferences.current[1]);
  }

  return (
    <Div
      class="keyboard-body"
      content={words?.map((word, rowIndex) => (
        // Row for each word (rows)
        <Div
          key={rowIndex}
          class="row"
          content={[
            word.split("").map((letter, colIndex) => (
              // Div-input for each letter (columns)
              <Key
                ref={(element) => {
                  oLetters[keyReferences.current.push(element)] = letter;
                }}
                key={`${rowIndex}${colIndex}${letter}`}
                keyPosition={}
                keyValue={`${rowIndex}${colIndex}${letter}`}
                forwardKey={forwardKey}
                // keyBoardPosition={position.current}
              />
            )),
            // validating the last word
            words.length - 1 !== rowIndex ? (
              // Blank space
              <Key
                ref={(element) => {
                  oLetters[keyReferences.current.push(element)] = "_s";
                }}
                key={`s${rowIndex}`}
                keyPosition={keyReferences.current.push()}
                keyValue={`s${rowIndex}`}
                forwardKey={forwardKey}
                // keyBoardPosition={position.current}
                content=""
              />
            ) : null,
          ]}
        />
      ))}
    />
  );
}

export default Keyboard;
