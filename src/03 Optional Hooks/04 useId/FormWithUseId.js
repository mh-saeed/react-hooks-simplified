import { useId } from "react";

const FormWithUseId = () => {
  const id = useId();

  return (
    <div>
      {/*// ** using useId hook we can solve this */}

      <label htmlFor={id}>Email</label>
      <input id={id} type="email" />
    </div>
  );
};

export default FormWithUseId;
