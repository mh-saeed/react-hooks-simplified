import { useCallback, useDebugValue, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [response, setResponse] = useState();
  const [status, setStatus] = useState(false);
  const [error, setError] = useState();

  useDebugValue("Success State of API Call: 🚀 " + status);
  useDebugValue("Error State of API Call: 💥 " + error);
  useDebugValue("Data Returned From API Call: 🌏 " + response);

  const getData = useCallback(async () => {
    try {
      const resp = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();
      setResponse(data);
      setStatus(data.success);
    } catch (err) {
      setError(err);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData, url]);

  return { response, error };
};
