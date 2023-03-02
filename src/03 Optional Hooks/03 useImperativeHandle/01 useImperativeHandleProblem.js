import { useState, useRef } from "react";
import CustomInput from "./CustomInput";

const UseImperativeHandleProblem = () => {
  const [value, setValue] = useState("red");
  const inputRef = useRef();

  return (
    <>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <button onClick={() => inputRef.current.focus()}>Focus</button>{" "}
    </>
  );
};
export default UseImperativeHandleProblem;
