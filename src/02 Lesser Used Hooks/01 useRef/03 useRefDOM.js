import { useRef, useEffect, useState } from "react";

const UseRefDOM = () => {
  //DOM
  const elementRef = useRef();
  useEffect(() => {
    const divElement = elementRef.current;
    console.log(divElement); // logs <div>I'm an element</div>
  }, []);

  // INPUT
  const [getInputValue, setInputValue] = useState("Write Here");
  const inputRef = useRef();

  function inputFocus() {
    inputRef.current.focus();
  }
  function changeInputValue() {
    setInputValue(inputRef.current.value);
  }

  return (
    <>
      <div ref={elementRef}>{getInputValue}</div>
      <input
        type="text"
        ref={inputRef}
        value={getInputValue}
        onChange={changeInputValue}
      />
      <button onClick={inputFocus}>focus</button>
    </>
  );
};

export default UseRefDOM;
