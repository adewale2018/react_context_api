import React, { useState, createContext, useContext } from "react";

const CountContext = createContext();

function UseCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error(`Context must be used within the Provider`);
  }
  const [count, setCount] = context;
  const increment = () => setCount((c) => c + 1);
  return {
    count,
    setCount,
    increment,
  };
}

export default UseCount;
