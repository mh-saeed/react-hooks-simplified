import { useReducer, useRef } from "react";
import { reducer, ACTIONS } from "./reducer2";
import Todo from "./Todo";

const UseReducerComplexExample = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  const inputRef = useRef("");

  console.log("Main Component Rerendering");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(inputRef.current.value);

    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { name: inputRef.current.value },
    });

    inputRef.current.value = "";
  }

  return (
    <>
      <h1>Todo's App</h1>

      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button type="submit">Submit</button>
      </form>

      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            dispatch={dispatch}
            ACTIONS={ACTIONS}
          />
        );
      })}
    </>
  );
};

export default UseReducerComplexExample;
