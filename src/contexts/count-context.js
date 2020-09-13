import React, { useState, createContext, useContext, useMemo } from "react";

const CountContext = createContext();

function useCount(props) {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error(`Count must be used within the context`);
  }
  return context;
}

function CountProvider(props) {
  const [count, setCount] = useState(5);

  const value = useMemo(() => [count, setCount], [count]);
  return <CountContext.Provider value={value} {...props} />;
}

export { useCount, CountProvider };
