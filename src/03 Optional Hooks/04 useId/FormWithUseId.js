import { useId } from "react";

const FormWithUseId = () => {
  const id = useId();

  return (
    <>
      {/*// ** using useId hook we can solve this */}

      <label htmlFor={id}>Email</label>
      <input id={id} type="email" />
    </>
  );
};

export default FormWithUseId;
