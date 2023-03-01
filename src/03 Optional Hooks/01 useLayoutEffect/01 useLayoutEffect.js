import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  // Asynchronous
  //   useEffect(() => {
  //     console.log("useEffect ran ...");
  //     if (popup.current == null || button.current == null) return;
  //     const { bottom } = button.current.getBoundingClientRect();
  //     popup.current.style.top = `${bottom + 55}px`;
  //   }, [show]);

  //   Synchronous
  useLayoutEffect(() => {
    console.log("useLayoutEffect ran ...");
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  console.log("Component Rendered ...");
  return (
    <>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click Here
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          This is a popup
        </div>
      )}
    </>
  );
};

export default UseLayoutEffect;
