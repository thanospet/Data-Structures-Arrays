import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [cells, setCells] = useState(["a", "b", "c"]);

  const handleChangeText = (newCellValue, indexToUpdate) => {
    setCells((prevCells) =>
      prevCells.map((cell, idx) =>
        idx === indexToUpdate ? newCellValue : cell
      )
    );
  };

  const handlePlusClicked = (idx) => {
    setCells((prevCells) => [
      ...prevCells.slice(0, idx + 1),
      "_",
      ...prevCells.slice(idx + 1),
    ]);
  };

  const combinedString = cells.join("");

  return (
    <main className="App">
      <section className="App-header">
        {cells.map((cell, idx) => {
          return (
            <>
              <div key={idx} className="cells ">
                <input
                  type="text"
                  onChange={(e) => handleChangeText(e.currentTarget.value, idx)}
                  value={cell}
                ></input>
                {idx < cells.length - 1 && (
                  <span onClick={() => handlePlusClicked(idx)} className="span">
                    {" "}
                  </span>
                )}
              </div>
            </>
          );
        })}
        {combinedString}
      </section>
    </main>
  );
}

export default App;
