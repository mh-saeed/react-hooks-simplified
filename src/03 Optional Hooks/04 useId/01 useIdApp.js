import FormWithOutId from "./FormWithoutUseId";
import FormWithUseId from "./FormWithUseId";

const UseIdApp = () => {
  return (
    <>
      <h2>Form with out useId()</h2>
      <FormWithOutId />
      <FormWithOutId />

      <h2>Form with useId()</h2>
      <FormWithUseId />
      <FormWithUseId />
    </>
  );
};
export default UseIdApp;
