const FormWithOutUseId = () => {
  return (
    <>
      {/*
    
    // ! using hard coding id attribute will cause error if we render this component multiple times
    // ? in this example if we click on the label it won't focus the correct will 
    // ** using useId hook we can solve this
     
     */}

      <div>
        <label htmlFor={"email"}>Email</label>
        <input id={"email"} type="email" />
      </div>
    </>
  );
};

export default FormWithOutUseId;
