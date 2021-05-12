import useKey from "@accessible/use-key";

import Button from "../../atoms/Button";
import Div from "../../atoms/Div";
import "./_style.scss";

function Next(props) {
  useKey(window, {
    Enter: (event) => props.getData(props.number + 1),
  });

  return (
    <Div
      class="nextContainer"
      content={
        <Button
          type="button"
          text="Next"
          class="next"
        />
      }
    />
  );
}

export default Next;
