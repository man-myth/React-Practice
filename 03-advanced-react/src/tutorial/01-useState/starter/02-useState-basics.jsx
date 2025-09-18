import { useState } from "react";

const UseStateBasics = () => {
  let num = useState(0);

  return (
    <section>
      <h2>{num}</h2>
      <button
        className="btn"
        onClick={() => {
          num += 1;
          console.log(num);
        }}
      >
        add
      </button>
    </section>
  );
};

export default UseStateBasics;
