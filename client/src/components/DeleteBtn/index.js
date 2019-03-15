import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn({type = "danger", onClick, children}) {
  return (
    <button onClick={onClick} className={["btn btn-md", `btn-${type}`].join(" ")}>
    {children}
    </button>
  );
}


export default DeleteBtn;
