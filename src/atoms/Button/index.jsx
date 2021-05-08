import "./_style.scss";

function Button(props) {
  return (
    <input type={props.type} className="nextButton">
      {props.name}
    </input>
  );
}

export default Button;
