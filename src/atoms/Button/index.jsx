function Button(props) {
  return (
    <input
      type={props.type}
      className={props.class}
      defaultValue={props.text}
    />
  );
}

export default Button;
