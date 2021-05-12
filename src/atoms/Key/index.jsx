import { forwardRef, useState } from "react";

const Key = forwardRef((props, ref) => {
  const [classState, setClassState] = useState("column empty");

  function handleLetter(event, key) {
    setClassState("column correct");
  }

  return (
    <input onKeyPress={(event) => handleLetter(event)} className={classState} />
  );
});

export default Key;
