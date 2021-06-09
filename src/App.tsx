import React from "react";
import "./App.css";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name={"gabriel"} />
      </header>
    </div>
  );
}

export default App;
