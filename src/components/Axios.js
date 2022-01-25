import axios from "axios";
import React, { useEffect, useState } from "react";

function Axios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((res) => {
      setData(
        res.data.results.map((finalData) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
            key={finalData}
          >
            <h2>Random Name: </h2>
            <h3>{finalData.name.first}</h3>
          </div>
        ))
      );
    });
  }, []);
  return <div>{data}</div>;
}

export default Axios;
