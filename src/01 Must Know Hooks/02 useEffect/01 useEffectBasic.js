import React, { useState, useEffect } from "react";

const UseEffectBasic = () => {
  const [resourceType, setResourceType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    // cleanup function will ran first to clean whatever we did last time
    return () => {
      console.log("return from the useEffect");
    };
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>

      <h3>{resourceType}</h3>
      {items.map((item) => {
        return <pre key={Math.random(10)}>{JSON.stringify(item, null, 4)}</pre>;
      })}
    </>
  );
};

export default UseEffectBasic;
