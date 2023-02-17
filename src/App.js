import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [cells, setCells] = useState(["a", "b", "c"]);

  const handleChangeText = (event, idx) => {
    setCells(event.target.value);
  };

  return (
    <main className="App">
      <section className="App-header">
        {cells.map((cell, idx) => {
          return (
            <div key={idx} className="cells">
              <input
                onChange={(event) => handleChangeText(event.target.value, idx)}
                value={cell}
              ></input>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default App;
