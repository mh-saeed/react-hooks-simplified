import { useState } from "react";
import Expensive from "./Expensive";

function UseMemoAlternative() {
  // if we want to return JSX using this way and we also not want to re-render expensive component then we have to use/export the expensive component use React.memo

  // const [backgroundColor, setBackgroundColor] = useState("white");
  // return (
  //   <div style={{ backgroundColor }}>
  //     <input onChange={(e) => setBackgroundColor(e.target.value)} />
  //     <Expensive />
  //   </div>
  // );

  // if we want to return JSX using this way but we don't want to re-render expensive component & we also not want to use React.memo then we have to create a parent component like a layout component

  return (
    <BgProvider>
      <Expensive />
    </BgProvider>
  );
}

const BgProvider = ({ children }) => {
  let [backgroundColor, setBackgroundColor] = useState("white");

  return (
    <div style={{ backgroundColor }}>
      <input onChange={(e) => setBackgroundColor(e.target.value)} />
      {children}
    </div>
  );
};

export default UseMemoAlternative;
