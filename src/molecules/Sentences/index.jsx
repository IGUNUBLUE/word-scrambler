import { useSelector } from "react-redux";

import Span from "../../atoms/Span";
import Div from "../../atoms/Div";
import "./_style.scss";

function Sentences(props) {
  const sentence = useSelector((state) => state.sentence);
  let randomize = "";

  if (sentence.text) {
    // Dividing the sentence into words
    let words = sentence.text.toLowerCase().split(" ");
    // Scramble
    randomize = words
      .map((word) => {
        if (word.length > 3) {
          let firstLetter = word[0];
          let lastLetter = word[word.length - 1];
          let centerletters = word.split("");
          centerletters.shift(); //remove first letter
          centerletters.pop(); //remove last letter
          // Stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
          // Randomize
          centerletters = centerletters
            .sort(() => {
              return 0.5 - Math.random();
            })
            .join("");
          // end stackoverflow
          word = `${firstLetter}${centerletters}${lastLetter}`; // Uniting all the Word randomize
        }
        return word;
      })
      .join(" ");
  }

  return (
    <Div
      class="sentences"
      content={
        <Span
          sentence={sentence.text ? randomize : "Please, wait a sentence..."}
        />
      }
    />
  );
}

export default Sentences;
