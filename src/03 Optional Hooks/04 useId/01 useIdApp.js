import FormWithOutId from "./FormWithoutUseId";
import FormWithUseId from "./FormWithUseId";
import LogInForm from "./LoginForm";

const UseIdApp = () => {
  return (
    <form>
      <h2>Form with out useId()</h2>
      <p>If you click on email label it won't focus on it's input field.</p>
      <FormWithOutId />
      <br />
      <FormWithOutId />

      <h2>Form with useId()</h2>

      <FormWithUseId />
      <br />
      <FormWithUseId />

      <h2>Form using single useId() in multiple labels and input field</h2>
      <LogInForm />
    </form>
  );
};
export default UseIdApp;
