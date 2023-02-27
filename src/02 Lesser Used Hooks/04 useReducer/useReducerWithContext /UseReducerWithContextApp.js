import TodosProvider from "./TodosContextProvider";
import TodoList from "./TodoList";

const UseReducerContextApp = () => {
  console.log("App Rerendering");

  return (
    <TodosProvider>
      <TodoList />
    </TodosProvider>
  );
};
export default UseReducerContextApp;
