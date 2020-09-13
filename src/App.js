import React from "react";
import { CountProvider } from "./contexts/count-context";
import { ColorProvider } from "./contexts/color-context";
import Header from "./components/Header";
import "./App.css";
import Anonymous from "./components/Anonymous";

function App() {
  return (
    <ColorProvider>
      <CountProvider>
        <Header />
        <Anonymous />
      </CountProvider>
    </ColorProvider>
  );
}

export default App;
