import React from "react";

// this component is really expensive to re-render.It can have many functions inside, or it can fetch thousands of rows of data or maybe it has a large table here, whatever it might be. Basically, we shouldn't call this component unnecessarily.

// To prevent this we can memoize this component using React memo.

const Expensive = () => {
  console.log("expensive component rendered!");

  let total = 0;
  for (let i = 0; i < 1000000000; i++) {
    total += i;
  }

  return <div>Expensive: {total}</div>;
};

export default Expensive;

// const Expensive = React.memo(() => {
//   console.log("expensive component rendered!");

//   let total = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     total += i;
//   }

//   return <div>Expensive</div>;
// });

// export default Expensive;
