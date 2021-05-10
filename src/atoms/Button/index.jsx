function Button(props) {
  return (
    <input
      onClick={() => props.click(props.number + 1)}
      type={props.type}
      className={props.class}
      defaultValue={props.text}
    />
  );
}

export default Button;
