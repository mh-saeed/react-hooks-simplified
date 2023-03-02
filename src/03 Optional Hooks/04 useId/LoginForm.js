import { useId } from "react";

const LogInForm = () => {
  const id = useId();
  return (
    <>
      <label htmlFor={`${id}-email`}>Email</label>
      <input id={`${id}-email`} type="email" />
      <br />
      <label htmlFor={`${id}-password`}>Password</label>
      <input id={`${id}-password`} type="password" autoComplete="" />
    </>
  );
};

export default LogInForm;
