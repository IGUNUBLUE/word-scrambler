import Div from "../../atoms/Div";
import Key from "../../atoms/Key";
import Space from "../../atoms/Space";
import "./_style.scss";

function Keyboard(props) {
  let arrayWords = props.sentence ? props.sentence.split(" ") : null;

  return (
    <Div
      class="keyboard-body"
      content={
        arrayWords
          ? arrayWords.map((word, rowIndex) => (
              // Row for each word (rows)
              <Div
                key={rowIndex}
                class="row"
                content={[
                  // column for each letter in the row (columns)
                  word
                    .split("")
                    .map((letter, colIndex) => (
                      <Key key={`${rowIndex}${colIndex}${letter}`} />
                    )),
                  // validating the last word
                  arrayWords.length - 1 !== rowIndex ? (
                    <Space key={`s${rowIndex}`} />
                  ) : null,
                ]}
              />
            ))
          : null
      }
    />
  );
}

export default Keyboard;
