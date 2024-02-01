import React, { useEffect, useState } from "react";

function useCustom(url) {
  const [data, setData] = useState(null);
  const [isloading, setLoading] = useState(true);
  const [iserro, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Data can not fetched");
        } else {
          return res.json();
        }
      })
      .then((res) => {
        setData(res);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);

  return [data, setData, isloading, setLoading];
}

export default useCustom;
