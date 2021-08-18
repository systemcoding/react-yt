import React from "react";

function Button({ children, event }) {
  return (
    <div>
      <button onClick={event}>{children}</button>
    </div>
  );
}

export default Button;
