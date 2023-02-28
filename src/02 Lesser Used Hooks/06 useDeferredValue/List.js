import { useMemo, useDeferredValue, useEffect } from "react";

const List = ({ input }) => {
  const LIST_SIZE = 20000;

  const deferredInput = useDeferredValue(input);

  // useEffect to inspect/see how useDeferredValue hook is working behind the scene

  useEffect(() => {
    console.log(`Input: ${input} \nDeferred: ${deferredInput}`);
  }, [input, deferredInput]);

  const list = useMemo(() => {
    const l = [];

    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }

    return l;
  }, [deferredInput]);

  return list;
};

export default List;
