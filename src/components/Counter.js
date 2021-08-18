import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const disabled = true;
  return (
    <div>
      <text>{count}</text> <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        disabled={count === 0 ? disabled : !disabled}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
