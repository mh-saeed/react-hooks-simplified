import React, { useState, useEffect } from "react";

const UseEffectWindowInnerWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <div>
      <div>Window Width: {windowWidth}</div>
    </div>
  );
};

export default UseEffectWindowInnerWidth;
