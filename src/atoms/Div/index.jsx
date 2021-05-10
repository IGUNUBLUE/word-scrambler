import { forwardRef } from "react";

const Div = forwardRef((props, ref) => {
  console.log(props.ref)
  return (
    <div
      // onKeyDown={props.keyDown}
      suppressContentEditableWarning={true}
      className={props.class}
      contentEditable={props.contentEdit ? props.contentEdit : "false"}
    >
      {props.content}
    </div>
  );
});

export default Div;
