import { useState } from "react";
import List from "./List";

const UseCallbackProblem = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // changing the state of theme was causing List component to get re-rendered
  // even when the getItem prop was same
  const getItems = () => {
    return [number, number + 1, number + 2];
  };

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  console.log("component rendered!");

  return (
    <div style={theme}>
      <input
        type={"number"}
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        placeholder="enter a text"
      />
      <button onClick={() => setDark((prevDarkValue) => !prevDarkValue)}>
        Change Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallbackProblem;
