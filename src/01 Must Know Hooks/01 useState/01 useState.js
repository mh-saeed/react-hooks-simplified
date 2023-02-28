import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(() => {
    console.log("count state function Ran ...");
    return 0;
  });

  const [theme, setTheme] = useState(() => {
    console.log("theme state function Ran ...");
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

  console.log("Component Rendered ...");

  return (
    <>
      <div>
        <span>{count}</span>
        <span>{theme}</span>
      </div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={changeTheme}>change theme</button>
    </>
  );
};

export default UseState;
