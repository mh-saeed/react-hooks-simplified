import { useReducer, useState } from "react";
import { reducer, ACTIONS } from "./reducer2";
import Todo from "./Todo";

const UseReducerComplexExample = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  console.log("Main Component Rerendering");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
