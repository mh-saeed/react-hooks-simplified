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
