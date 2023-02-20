import React, { useState, useEffect, useMemo } from "react";

const UseEffectNonPrimitiveDependency = () => {
  const [name, setName] = useState("");
  const [state, setState] = useState({
    name: "",
    selected: false,
  });

  /* 
    if our dependency is non-primitive(object or array)then the useEffect will run every time,even if our state(data/value) is not changed because for non-primitive data, JS compare there reference not value
  */

  // Example:

  // 1 === 1 // true
  // {name:"saeed"} === {name:"saeed"} // false, because in computer memory both objects will have different reference

  // Note :  computers compare values  of variables when they hold a string, number, boolean, null, or undefined. But when it comes to  objects or arrays, they compare their references instead of their content.

  useEffect(() => {
    console.log(`The state has changed, useEffect runs!`);
  }, [state]);

  // PRIMITIVE PROPERTY BASED DEPENDENCY

  // if our dependency(useEffect array argument) is an object than in-order to run useEffect only when the properties of objects are changed then we have to pass individual properties of object to useEffect as an dependency Or we can use useMemo

  useEffect(() => {
    console.log(`The state has changed, useEffect runs!`);
  }, [state.name, state.selected]);

  // MEMOIZED DEPENDENCY - useMemo Version

  const user = useMemo(
    () => ({
      name: state.name,
      selected: state.selected,
    }),

    [state.name, state.selected]
  );

  useEffect(() => {
    console.log(`The state has changed, useEffect runs!`);
  }, [user]);

  const handleAddName = () => {
    setState((prev) => ({ ...prev, name }));
  };

  const handleSelect = () => {
    setState((prev) => ({ ...prev, selected: true }));
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAddName}>Add Name</button>
      <button onClick={handleSelect}>Select</button>
      {`{
      name:${state.name},
      selected:${state.selected.toString()}
   }`}
    </div>
  );
};

export default UseEffectNonPrimitiveDependency;
