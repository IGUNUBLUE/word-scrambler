import Button from "../../atoms/Button";
import Div from "../../atoms/Div";
import "./_style.scss";

function Next() {
  return (
    <Div
      class="nextContainer"
      content={<Button type="button" text="Next" class="next" />}
    />
  );
}

export default Next;
