import { useState } from "react";

const UseStateObject = () => {
  const person = {
    name: "peter",
    age: "24",
    hobby: "Enjoys To: read books",
  };
  const [p, setP] = useState(person);

  const change = () => {
    setP({
      name: "john",
      age: "30",
      hobby: "Enjoys To: play games",
    });
  };
  return (
    <div>
      <h1>{p.name}</h1>
      <h2>{p.age}</h2>
      <h3>{p.hobby}</h3>
      <button className="btn" onClick={change}>
        {" "}
        Change
      </button>
    </div>
  );
};

export default UseStateObject;
