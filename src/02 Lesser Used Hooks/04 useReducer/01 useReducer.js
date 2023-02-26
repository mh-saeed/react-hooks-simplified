import { useReducer } from "react";
import reducer from "./reducer";

const UseReduceExample = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  console.log("Component rendered ...");

  return (
    <>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button
        onClick={() => {
          dispatch({ type: "change-count", payload: { amount: 5 } });
        }}
      >
        Add 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default UseReduceExample;
