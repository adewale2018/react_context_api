import React from "react";

function CountDisplay({ count, increa }) {
  const addOne = () => increa((c) => c + 1);
  return (
    <>
      <h4>Count Dashboard..</h4>
      <p>
        Today, the count is <strong>{count}</strong>. Awesome!
      </p>
      <p>Want to increase the count?</p>
      <button onClick={addOne}>Add to Count</button>
    </>
  );
}

export default CountDisplay;
