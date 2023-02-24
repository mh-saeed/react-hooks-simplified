import { useState } from "react";
import Expensive from "./Expensive";

function UseMemoExpensiveComponent() {
  //   const [name, setName] = useState("");

  //   return (
  //     <div>
  //       <input onChange={(e) => setName(e.target.value)} placeholder="name" />
  //       <Expensive />
  //     </div>
  //   );
  // }

  return (
    <div>
      <Form />
      {/*
       this component is really expensive to re-render.It can have many functions inside, or it can fetch thousands of rows of data or maybe it has a large table here, whatever it might be. Basically, we shouldn't call this component unnecessarily.
       */}
      <Expensive />
    </div>
  );
}

const Form = () => {
  const [name, setName] = useState("");
  return <input onChange={(e) => setName(e.target.value)} placeholder={name} />;
};

export default UseMemoExpensiveComponent;
