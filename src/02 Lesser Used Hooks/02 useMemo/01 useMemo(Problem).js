import { useState } from "react";

function UseMemoProblem() {
  const [text, setText] = useState("");

  const expensiveFunction = () => {
    console.log("function running!");
    let total = 0;
    for (let i = 1; i < 100000000; i++) {
      total += i;
    }
    return total;
  };

  const sum = expensiveFunction();

  console.log("component rendered!");

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="enter a text"
      />
      <span>Total: {sum}</span>
      <span>Text: {text}</span>
    </div>
  );
}

export default UseMemoProblem;
