import { forwardRef, useState } from "react";

const Space = forwardRef((props, ref) => {
  const [classState, setClassState] = useState("column space");

  function handleLetter(event, key) {
    setClassState("column correct");
  }

  return (
    <input onKeyPress={(event) => handleLetter(event)} className={classState} />
  );
});

export default Space;
