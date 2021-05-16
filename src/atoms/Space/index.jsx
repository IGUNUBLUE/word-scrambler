import { forwardRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Space = forwardRef((props, ref) => {
  const sentence = useSelector((state) => state.sentence);
  const [classState, setClassState] = useState("column space");

  useEffect(() => setClassState("column space"), [sentence]);

  function handleLetter(event) {
    if (props.keyValue[0] === "_" && event.key === " ") {
      setClassState("column correct");
      // next colum (letter) or row (word)
      props.handleNextInput();
    }
  }

  return (
    <input
      type="text"
      maxLength="1"
      className={classState}
      ref={ref}
      onKeyPress={(event) => handleLetter(event)}
    />
  );
});

export default Space;
