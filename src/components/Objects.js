import React, { useState } from "react";

function App() {
  const [state, setState] = useState({
    count: 0,
    theme: "green",
  });
  const count = state.count;
  const theme = state.theme;

  function handleIncrement() {
    // setCount((prevCount) => prevCount + 1);
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
  }

  return (
    <div>
      <h1>{state.count}</h1>
      <h1>{state.theme}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
