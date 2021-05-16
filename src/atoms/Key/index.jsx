import { forwardRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Key = forwardRef((props, ref) => {
  const sentence = useSelector((state) => state.sentence);
  const [classState, setClassState] = useState("");
  
  useEffect(() => setClassState("column empty"), [sentence]);

  function handleLetter(event) {
    if (event.key === props.keyValue[props.keyValue.length - 1]) {
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

export default Key;
