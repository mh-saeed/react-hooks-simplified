import { useState, useCallback } from "react";
import List from "./List";

const UseCallbackSolution = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // changing the state of theme was causing List component to get re-rendered
  // even when the getItem prop was same
  // to solve this, we will use useCallback

  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number]
  );

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

export default UseCallbackSolution;
