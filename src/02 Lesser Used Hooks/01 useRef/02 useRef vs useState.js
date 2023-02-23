import { useState, useRef } from "react";

const UseRefVSUseState = () => {
  const [count, setCount] = useState(0);

  const handleUseState = () => {
    const updatedCount = count + 1;
    console.log(`UseState: Clicked ${updatedCount} times`);
    setCount(updatedCount);
  };

  const countRef = useRef(0);

  const handleUseRef = () => {
    countRef.current++;
    console.log(`UseRef: Clicked ${countRef.current} times`);
  };

  console.log("I rendered!");

  return (
    <>
      <button onClick={handleUseState}>Click me to Update UseState</button>
      <button onClick={handleUseRef}>Click me to Update UseRef </button>
    </>
  );
};
export default UseRefVSUseState;
