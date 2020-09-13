import React from "react";
import { useCount } from "../contexts/count-context";

function Anonymous() {
  const [count, setCount] = useCount();
  return (
    <div>
      <h4>Anonymous</h4>
      <p>
        <strong>Count:</strong> {count}
      </p>
      <button onClick={() => setCount((c) => c - 2)}> -2 </button>
    </div>
  );
}

export default Anonymous;
