function Button(props) {
  return (
    <input
      type={props.type}
      className={props.class}
      value={props.text}
    />
  );
}

export default Button;
