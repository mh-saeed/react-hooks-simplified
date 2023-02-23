// Use case: logging button clicks

import { useRef } from "react";

const UseRef = () => {
  const countRef = useRef(0);

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  console.log("I rendered!");

  return (
    <>
      <button onClick={handle}>Click me</button>
    </>
  );
};

export default UseRef;

// There are 2 rules to remember about references:

// The value of the reference is persisted (remains unchanged) between component re-renderings;
// Updating a reference doesn't trigger a component re-rendering.
