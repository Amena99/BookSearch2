import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ type, onClick, className, children }) {
  return (
    <form action="/search">
      <button onClick={onClick} className={["btn btn-md", `btn btn-${type}`, className].join(" ")}>
      {children}
    </button>
    </form>
    
  );
}

export default Button;
