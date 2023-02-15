import React, { useState } from "react";

// Explanation & additional Info is at the end of code

const UseState = () => {
  const [count, setCount] = useState(() => {
    console.log("Run ...");
    return 0;
  });

  const [theme, setTheme] = useState(() => {
    console.log("Run ...");
    return "dark";
  });

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function reset() {
    setCount((resetCount) => (resetCount = 0));
  }

  function changeTheme() {
    setTheme(
      (prevTheme) => (prevTheme = prevTheme === "dark" ? "light" : "dark")
    );
  }

  return (
    <>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={changeTheme}>change theme</button>
    </>
  );
};

export default UseState;

/* 
  
  📌 React Hooks Rules 🗒️
  
  if (true) {
    const [state, setState] = useState("hello world!");
  } 

  This code ⬆️ will give error because: React Hook "useState" is called conditionally

  React Hooks must be called in the exact same order in every component render
  that mean we can not call any react hook in if statements or functions, 
  or inside of loops, they can not be nested in any thing, the must be at the 
  top level of functional component.

  ------------------------------------------------------------------------------
 
  📌 Initial State Computation

  Sometimes it is slow to compute the initial state of a component. 
  This is not a problem in class components since the initial state 
  computation only happens once in the constructor, but in functional 
  components the initial state computation is declared in the render 
  function and happens every render.

  Having a slow initial state computation (Multiple Renders 🔴) 
  can slow down an entire application significantly because of this.

  useState( Slow computation )

  example:

  const [count, setCount] = useState(0);  
  OR   
  const [count, setCount] = useState(countInitial());

  if we set the default value of useState by passing the value directly
  to the useState constructor then whenever the component get's rendered, 
  the value/state of useState will be the default passed value
    
  Slow initial state computation - Multiple Renders Solution 🟢

  useState(() => {
    Slow computation 
  })

  example:
  
  const [count, setCount] = useState(()=>{
    console.log("Run ...")
    return 0
  }); 
  
  useState can also take a function as the argument instead of a value, 
  and that function will only be run the very first time a component is rendered. 
  By using this function version of useState you will no longer run the 
  slow computation each render, but only once on the first render of the 
  component just like class components.
  
  ------------------------------------------------------------------------------
  
  📌 WRONG WAY OF USING HOOK 🔴

  setCount(count-1)

  this is incorrect way to update value of useState based on previous value because 
  if call setCount two times in a row it will just update the value at once
 
  for example:

  function increment() {
    setCount(count + 1);
    setCount(count + 1);
  }


  📌 CORRECT WAY OF USING HOOK 🟢

  Instead use the below way for updating state. 
  
  setCount((prevCount) => prevCount + 1);

  it will take the previous State as an argument and then it will update the current state
  
  for example:
  
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  ------------------------------------------------------------------------------

  📌 Updating State Objects

  Most of the time we use single values with useState, 
  but there are some cases where using an object makes more sense. 
  Let's just use the example of user preferences.

  const [preferences, setPreferences] = useState({
    theme: 'light',
    fontSize: 'normal
  '})

  To update the theme portion of this state we may think to do something like this.
 
  setPreferences({ theme: 'dark' }) - WRONG WAY 🔴

  This code will update the entire preferences object to be just { theme: 'dark' } 
  without any fontSize. 

  This is because the set method from useState will overwrite the entire value 
  of the state with the new value, so the new value of { theme: 'dark' } overwrites 
  all of the old state. 

  In order to make sure this does not happen you would need to combine the 
  old state with the new state manually.

  This code will combine all the old preferences 
  with the new dark theme preference. - CORRECT WAY 🟢

  setPreferences(prevPreferences => {
    return { ...prevPreferences, theme: 'dark' }
  })

  example:

  const [state, setState] = useState ({ count: 4, theme: "blue ' })
  
  function decrementCount (){
    setState(prevState => {
    return { ...prevState, count: prevState.count - 1 }
  }

  if don't want to use object for storing multiple/different types of state 
  you can use as multiple useState hook to store different types of states.
  this is the biggest advantage of useState hook.
  
  that you can have multiple different pieces of state, all broken out and 
  it becomes much easier to manage and change state of one type without changing others.

 */
