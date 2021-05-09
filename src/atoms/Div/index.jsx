function Div(props) {
  // console.log(props)
  return (
    <div
      onKeyDown={props.keyDown}
      suppressContentEditableWarning={true}
      className={props.class}
      contentEditable={props.contentEdit ? props.contentEdit : "false"}
      tabIndex={props.tabIndex ? props.tabIndex : -1}
    >
      {props.content}
    </div>
  );
}

export default Div;
