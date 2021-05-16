import { useSelector } from "react-redux";

import Span from "../../atoms/Span";
import Div from "../../atoms/Div";
import "./_style.scss";

function Score() {
  const score = useSelector((state) => state.score);

  return <Div class="score" content={<Span sentence={`Score: ${score}`} />} />;
}

export default Score;
