// import useKeys from "../../hooks/useKeys";

import Div from "../../atoms/Div";
import "./_style.scss";


// @keydown(letters);
  
function Keyboard(props) {
  // const keyPress = useKeys()
  // Converting the sentence into an array of words
  const words = props.sentence?.split(" ");
  // All letters in a single array
  const letters = words?.map((word) => word.split("")).flat();

  function handleLetter(event, letter) {
    // keyPress(event.val)
    console.log(event.key, letter);
  }

  return (
    <Div
      class="keyboard-body"
      content={words?.map((word, i) => (
        // Row for each word
        <Div
          key={i}
          class="row"
          content={[
            word.split("").map((letter, i) => (
              // Div for each letter
              <Div
                key={`${letter}${i}`}
                contentEdit="true"
                class={`column empty`}
                // content={letter}
                tabIndex={0}
                keyDown={(event) => handleLetter(event, letter)}
              />
            )),
            // validating the last word
            words.length - 1 !== i ? (
              // Blank space
              <Div key={`blank_${i}`} class={`column space`} content="" />
            ) : null,
          ]}
        />
      ))}
    />
  );
}

export default Keyboard;
