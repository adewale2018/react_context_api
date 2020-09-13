import React from "react";
import { useCount } from "../contexts/count-context";
import { useColor } from "../contexts/color-context";

function Anonymous() {
  const [count, setCount] = useCount();
  const [color, setColor] = useColor();
  const changeColor = () => {
    if (color === "teal") {
      return setColor("green");
    }
    return setColor("teal");
  };
  return (
    <div>
      <h4 style={{ color }}>Anonymous</h4>
      <p>
        <strong>Count:</strong> {count}
      </p>
      <button onClick={() => setCount((c) => c - 2)}> -2 </button>
      <button
        onClick={changeColor}
        style={{ backgroundColor: color, color: "white" }}
      >
        Toggle Color
      </button>
    </div>
  );
}

export default Anonymous;
