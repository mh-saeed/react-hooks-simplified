const FormWithOutUseId = () => {
  return (
    <>
      {/*
    // ! using hard coding id attribute will cause error: Found elements with non-unique id
    // ? in this example if we click on the label it won't focus the correct will 
    // ** using useId hook we can solve this
     */}

      <>
        <label htmlFor={"email"}>Email</label>
        <input id={"email"} type="email" />
      </>
    </>
  );
};

export default FormWithOutUseId;
