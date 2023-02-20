import React, { useState, useEffect } from "react";

const UseEffectGithubAPI = () => {
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
    <div>
      <h2>GitHub User</h2>
      <pre>{JSON.stringify(userInfo, null, 4)}</pre>
    </div>
  );
};

export default UseEffectGithubAPI;
