import React, { useState, useEffect } from "react";

const UseEffect = () => {
  // -------------------- Example 1 --------------------

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

  // -------------------- Example 2 --------------------

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  // -------------------- Example 3 --------------------
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`https://api.github.com/users/mh-saeed`);
      const fetchedUser = await response.json();
      setUserInfo(() => fetchedUser);
      console.log("running ... ");
    }
    fetchUser();
  }, []);

  return (
    <>
      {/* -------------------- Example 1 -------------------- */}
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>

      <h3>{resourceType}</h3>
      {items.map((item) => {
        return <pre key={Math.random(10)}>{JSON.stringify(item, null, 4)}</pre>;
      })}

      {/* -------------------- Example 2 -------------------- */}

      <div>Window Width: {windowWidth}</div>

      {/* // -------------------- Example 3 -------------------- */}

      <h2>GitHub User</h2>
      <pre>{JSON.stringify(userInfo, null, 4)}</pre>
    </>
  );
};

export default UseEffect;
