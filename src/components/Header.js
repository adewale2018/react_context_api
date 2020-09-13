import React from "react";
import { useCount } from "../contexts/count-context";
import { useColor } from "../contexts/color-context";
import CountDisplay from "./CountDisplay";

function Header() {
  const [count, setCount] = useCount();
  const [backgroundColor] = useColor();
  return (
    <>
      <h1 style={{ backgroundColor: backgroundColor }}>
        Header...<span style={{ color: "white" }}>{count}</span>
      </h1>
      <CountDisplay count={count} increa={setCount} />
    </>
  );
}

export default Header;
