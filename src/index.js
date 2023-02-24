import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
// import { Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import {
//   UseState,
//   UseEffectBasic,
//   UseEffectGithubAPI,
//   UseEffectWindowInnerWidth,
//   UseEffectNonPrimitiveDependency,
//   UseEffectWrongWay,
//   Home,
//   User,
//   Posts,
//   UseContextApp,
// } from "./01 Must Know Hooks";

import {
  // UseRef,
  // UseRefVSUseState,
  // UseRefDOM,
  // UseRefStorePrevValue,
  // Stopwatch,
  // UseMemoProblem,
  // UseMemoSolution,
  // UseMemoUseEffect,
  // UseMemoExpensiveComponent,
  UseMemoAlternative,
} from "./02 Lesser Used Hooks";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>

  <>
    {/* <UseState /> */}

    {/* <UseEffectBasic /> */}
    {/* <UseEffectGithubAPI /> */}
    {/* <UseEffectWindowInnerWidth /> */}
    {/* <UseEffectNonPrimitiveDependency /> */}
    {/* <UseEffectWrongWay />  */}

    {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="users/:id" element={<User />} />
      </Routes>
    </Router> */}

    {/* <UseContextApp /> */}

    {/* <UseRef /> */}
    {/* <UseRefVSUseState /> */}
    {/* <UseRefDOM /> */}
    {/* <UseRefStorePrevValue /> */}
    {/* <Stopwatch /> */}

    {/* <UseMemoProblem /> */}
    {/* <UseMemoSolution /> */}
    {/* <UseMemoUseEffect /> */}
    {/* <UseMemoExpensiveComponent /> */}
    <UseMemoAlternative />
  </>

  // </React.StrictMode> */
);

/* 
Strict mode can’t automatically detect side effects for you, but it can help you spot them by making them a little more deterministic. This is done by intentionally double-invoking the following functions:

1. Class component constructor, render, and shouldComponentUpdate methods
2. Class component static getDerivedStateFromProps method
3. Function component bodies
4. State updater functions (the first argument to setState)
5. Functions passed to useState, useMemo, or useReducer 

If you remove the StrictMode element from index.js, you'll see the output only gets logged once

Note: Strict mode checks are run in development mode only; they do not impact the production build.
*/
