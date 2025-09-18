import { useState } from "react";

const ErrorExample = () => {
  let num = 0;

  return (
    <section>
      <h2>{num}</h2>
      <button
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

export default ErrorExample;
