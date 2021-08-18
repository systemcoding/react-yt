import axios from "axios";
import React, { useEffect, useState } from "react";

function Axios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((res) => {
      setData(
        res.data.results.map((finalData) => (
          <h3>{finalData.name.first + " " + finalData.name.second}</h3>
        ))
      );
    });
  }, []);
  return <div>{data}</div>;
}

export default Axios;
