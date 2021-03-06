import React from "react"
import "./Box.css";

/** Individual colored box. */
function Box(props) {

  let msg = null
  if (props.changed === "changed!") {
    msg = "changed!"
  }

  return (
    <div
      className="Box"
      style={{ backgroundColor: props.color }}
    >
      {msg}
    </div>
  );
}

export default Box;
