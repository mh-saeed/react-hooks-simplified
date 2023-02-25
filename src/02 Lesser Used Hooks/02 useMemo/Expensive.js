import React from "react";

// this component is really expensive to re-render.It can have many functions inside, or it can fetch thousands of rows of data or maybe it has a large table here, whatever it might be. Basically, we shouldn't call this component unnecessarily.

// To prevent un-necessary renders, we can memoize this component using React.memo.
//  we can either export it like, export default React.memo(Expensive)
// or we can use it while creating the component like,
// const Expensive = React.memo(() => { return JSX }

const Expensive = () => {
  console.log("expensive component rendered!");

  for (let i = 0; i < 1000000000; i++) {}

  return <div>Expensive</div>;
};

export default Expensive;


// both ways are correct to use React.memo

// const Expensive = React.memo(() => {
//   console.log("expensive component rendered!");

//   for (let i = 0; i < 1000000000; i++) {}

//   return <div>Expensive</div>;
// });

// export default Expensive;
