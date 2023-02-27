import React from "react";

const Todo = ({ todo, dispatch, ACTIONS }) => {
  console.log(`Todo Component : ${todo.complete}`);

  return (
    <>
      <span
        style={{
          color: "white",
          backgroundColor: todo.complete ? `#119808` : `#960808`,
        }}
      >
        {todo.name}
      </span>

      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </>
  );
};
export default React.memo(Todo);
