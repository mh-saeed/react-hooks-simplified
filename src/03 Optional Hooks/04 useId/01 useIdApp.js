import FormWithOutId from "./FormWithoutUseId";
import FormWithUseId from "./FormWithUseId";
import LogInForm from "./LoginForm";

const UseIdApp = () => {
  return (
    <form>
      <h2>Form with out useId()</h2>
      <FormWithOutId />
      <FormWithOutId />

      <h2>Form with useId()</h2>
      <FormWithUseId />
      <FormWithUseId />

      <h2>Form using single useId() in multiple labels and input field</h2>
      <LogInForm />
    </form>
  );
};
export default UseIdApp;
