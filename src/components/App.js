import React from "react";
import Axios from "./Axios";
import Content from "./Counter";
import Lists from "./Lists";
// import styles
import "../styles/styles.css";

function App() {
  return (
    <div>
      <h1 className="heading">Axios:</h1>
      <Axios />
      <h1 className="heading">Content: </h1>
      <Content />
      <h1 className="heading">Lists: </h1>
      <Lists />
    </div>
  );
}

export default App;
