import { createContext, useReducer, useRef } from "react";
import { reducer, ACTIONS } from "./Reducer";

export const TodosContext = createContext([]);

const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, []);
  const inputRef = useRef("");

  console.log("TodosProvider Rerendering");

  function handleSubmit(e) {
    e.preventDefault();

    if (inputRef.current.value.length > 0) {
      dispatch({
        type: ACTIONS.ADD_TODO,
        payload: { name: inputRef.current.value },
      });
    }

    inputRef.current.value = "";
  }

  return (
    <TodosContext.Provider value={{ todos, dispatch, ACTIONS }}>
      <h1>Todo's App</h1>

      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button type="submit">Submit</button>
      </form>

      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
