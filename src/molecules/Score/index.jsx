import Span from "../../atoms/Span";
import Div from "../../atoms/Div";
import "./_style.scss";

function Score(props) {
  return (
    <Div
      class="score"
      content={<Span sentence={`Score: ${props.number ? props.number - 1 : 0}`} />}
    />
  );
}

export default Score;
