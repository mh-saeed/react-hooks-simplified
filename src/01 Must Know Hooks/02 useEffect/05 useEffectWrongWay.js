import React, { useEffect, useState } from "react";

const UseEffectWrongWay = () => {
  const [number, setNumber] = useState(0);

  // 1️⃣ WRONG (DO NOT UPDATE USING THE STATE ITSELF)

  // if we update the state like this ⏬ than our useEffect will run infinitely

  // useEffect(() => {
  //   console.log("useEffect runs")
  //   setInterval(() => {
  //     setNumber(number + 1);
  //   }, [1000]);
  // }, [number]);

  // 2️⃣ Almost Correct Way but still need some improvement

  //  if we add text together with the state, which also useEffect dependency, then our counter app will brock. That is because in every render we created another interval without cleaning the previous one. As you can see(in console) we have many intervals running. Of course, to find out this issue, we shouldn't test it by writing something with  useEffect dependency (<div>{number}something</div>), and this is where React Strict Mode is so important.

  // useEffect(() => {
  //   console.log("useEffect runs");
  //   setInterval(() => {
  //     setNumber((prev) => prev + 1);
  //   }, [1000]);
  // }, []);

  // 3️⃣ Correct Way using CLEAN-UP

  // cleanup function prevents any memory leaking and makes your applications much faster.

  useEffect(() => {
    console.log("useEffect runs");
    const interval = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, [1000]);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* without clean up */}
      {/* <div>{number}something</div> */}

      {/* with clean up */}
      <div>{number}something...</div>
    </>
  );
};

export default UseEffectWrongWay;
