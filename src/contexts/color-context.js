import React, { useState, createContext, useContext, useMemo } from "react";

const ColorContext = createContext();

function useColor(props) {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error(`Context must be used within the Provider...`);
  }
  return context;
}
function ColorProvider(props) {
  const [backgroundColor, setBackgroundColor] = useState("teal");

  const value = useMemo(() => [backgroundColor, setBackgroundColor], [
    backgroundColor,
  ]);
  return <ColorContext.Provider value={value} {...props} />;
}

export { useColor, ColorProvider };
