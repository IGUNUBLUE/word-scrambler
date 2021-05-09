import Span from "../../atoms/Span";
import Div from "../../atoms/Div";
import "./_style.scss";

function Instructions() {
  return (
    <Div
      key="father"
      class="instructions"
      content={[
        <Span key="i1" sentence="Guess the sentence! Starting typing" />,
        <br key="br1" />,
        <Span key="i2" sentence="The yellow block are meant for spaces" />,
      ]}
    />
  );
}

export default Instructions;
