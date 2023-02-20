import React from "react";
import ReactDOM from "react-dom/client";
import UseState from "./Must Know Hooks/01 useState";
import UseEffect from "./Must Know Hooks/02 useEffect";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <>
    <h2>UseState</h2>
    <UseState />
    <hr />
    <h2>UseEffect</h2>
    <UseEffect />
  </>
  // </React.StrictMode>
);

/* 
Strict mode can’t automatically detect side effects for you, but it can help you spot them by making them a little more deterministic. This is done by intentionally double-invoking the following functions:

1. Class component constructor, render, and shouldComponentUpdate methods
2. Class component static getDerivedStateFromProps method
3. Function component bodies
4. State updater functions (the first argument to setState)
5. Functions passed to useState, useMemo, or useReducer 

If you remove the StrictMode element from index.js, you'll see the output only gets logged once
*/
