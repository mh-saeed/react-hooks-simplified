import React, { useContext } from "react";
import { TodosContext } from "./TodosContextProvider";
import Todo from "./Todo";

const TodoList = () => {
  const { todos, dispatch, ACTIONS } = useContext(TodosContext);

  console.log(`TodoList rendering`);

  return (
    <>
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
export default React.memo(TodoList);
