import React, { useState } from "react";

// Explanation & additional Info is at the end of code

const UseState = () => {
  const [count, setCount] = useState(() => {
    console.log("Run ...");
    return 0;
  });

  const [theme, setTheme] = useState(() => {
    console.log("Run ...");
    return "dark";
  });

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function reset() {
    setCount((resetCount) => (resetCount = 0));
  }

  function changeTheme() {
    setTheme(
      (prevTheme) => (prevTheme = prevTheme === "dark" ? "light" : "dark")
    );
  }

  return (
    <>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={changeTheme}>change theme</button>
    </>
  );
};

export default UseState;
