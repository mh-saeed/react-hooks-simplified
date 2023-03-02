import { useState } from "react";

function UseMemoProblem() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = expensiveSlowFunction(number);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  console.log("component rendered!");

  return (
    <div>
      <input
        type={"number"}
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        placeholder="enter a text"
      />
      <button onClick={() => setDark((prevDarkValue) => !prevDarkValue)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

export default UseMemoProblem;

const expensiveSlowFunction = (num) => {
  console.log("Expensive function running!");
  for (let i = 1; i < 1000000000; i++) {}
  return num * 2;
};
