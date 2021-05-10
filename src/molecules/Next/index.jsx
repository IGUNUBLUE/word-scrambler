import Button from "../../atoms/Button";
import Div from "../../atoms/Div";
import "./_style.scss";

function Next(props) {
  return (
    <Div
      class="nextContainer"
      content={
        <Button
          type="button"
          text="Next"
          class="next"
          click={props.getData}
          number={props.number}
        />
      }
    />
  );
}

export default Next;
