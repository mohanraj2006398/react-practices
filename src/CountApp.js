import React, { useState } from "react";

const CountApp = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1> Count App</h1>
      <div>{count} </div>
      <div>
        <button onClick={() => setCount(count + 2)}>+</button>
        <button onClick={() => setCount(count - 2)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
};

export default CountApp;