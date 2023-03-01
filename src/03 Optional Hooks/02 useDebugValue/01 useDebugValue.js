import { useFetch } from "./useFetch";

function UseDebugValue() {
  const fetchedResponse = useFetch(
    "https://www.hpb.health.gov.lk/api/get-current-statistical/"
  );

  return (
    <div className="App">
      <pre>{JSON.stringify(fetchedResponse, null, 4)}</pre>
    </div>
  );
}

export default UseDebugValue;
