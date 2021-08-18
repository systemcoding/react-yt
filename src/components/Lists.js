import React, { useState } from "react";

export default function Lists() {
  const [data, setData] = useState([
    {
      personOne: "John",
      id: 100,
    },
    {
      personTwo: "Tom",
      id: 205,
    },
  ]);
  const numbers = [1, 2, 3, 4, 55, 667];
  return (
    <div>
      {/* {numbers.map((dataRes) => {
        return <h3>{dataRes * 10}</h3>;

      })} */}
      {/* {data.map((dataRes) => {
        return <h3 key={dataRes.id}>{dataRes.personOne}</h3>;
      })} */}
      {data.map((dataRes) => {
        return <h3>{dataRes.personOne}</h3>;
      })}
    </div>
  );
}
