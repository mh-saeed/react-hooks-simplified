import { useReducer } from "react";
import { reducer, ACTIONS } from "./reducer1";

const UseReducerCleanerWay = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  console.log("Component rendered ...");

  return (
    <>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.CHANGE_COUNT, payload: { amount: 5 } });
        }}
      >
        Add 5
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
    </>
  );
};

export default UseReducerCleanerWay;
