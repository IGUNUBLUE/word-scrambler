// My intention is to explain a little.I feel like the code is dense.
// This was a challenge for me! I learned a lot of new things ... thank you...

import { useRef } from "react";
import useKey from "@accessible/use-key";
import Div from "../../atoms/Div";
import "./_style.scss";

function Keyboard(props) {
  const divRef = useRef(null);
  // Converting the sentence into an array of words
  const words = props.sentence?.split(" ");
  // All letters in a single array
  const letters = Object.assign(
    {},
    words?.map((word) => word.split("")).flat()
  );

  useKey(window, {
    ...letters,
    Enter: (event) => props.getData(props.number + 1),
  });

  function handleLetter(row, column, letter) {
    let accessRef = `${row}${column}${letter}`;
    console.log(divRef.current[accessRef]);
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
            word.split("").map((letter, columnIndex) => (
              // Div for each letter (columns)
              <Div
                key={`${rowIndex}${columnIndex}${letter}`}
                // The reference is passed to the child component.
                // It is created using the index of the map, the structure is:
                // the row number, plus the column number and the letter present in the div
                ref={() =>
                  divRef.current.push(`${rowIndex}${columnIndex}${letter}`)
                }
                contentEdit="true"
                class={`column empty`}
                // Calling the handler with and passing the reference of the child component as a parameter.
                keyDown={() => handleLetter(rowIndex, columnIndex, letter)}
              />
            )),
            // validating the last word
            words.length - 1 !== rowIndex ? (
              // Blank space
              <Div
                key={`blank_${rowIndex}`}
                class={`column space`}
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
