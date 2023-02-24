import { useEffect, useMemo, useState } from "react";

function UseMemoUseEffect() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [country, setCountry] = useState("");

  //   const userType = {
  //     underAge: age < 18 ? true : false,
  //     citizen: country === "USA" ? true : false,
  //   };

  // if you have an non-primitive data type (like an array or an object) as a useEffect dependency, you can wrap that dependency with useMemo hook to avoid un-necessary components re-renders but since it is not an expensive dependency we should pass the object property individually and should avoid using useMemo

  const userType = useMemo(
    () => ({
      underAge: age < 18 ? true : false,
      citizen: country === "USA" ? true : false,
    }),
    [age, country]
  );

  useEffect(() => {
    console.log("user type has changed!");
  }, [userType]);

  console.log("component rendered!");

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} placeholder={name} />
      <input
        onChange={(e) => setAge(e.target.value)}
        placeholder="age"
        type="number"
      />
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="PL">PL</option>
        <option value="JP">JP</option>
      </select>
    </div>
  );
}

export default UseMemoUseEffect;
