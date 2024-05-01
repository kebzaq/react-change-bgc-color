import { useState } from "react";
import "./App.css";

function App() {
  const colors = [
    "green",
    "blue",
    "red",
    "yellow",
    "orange",
    "violet",
    "purple",
    "grey",
    "pink",
  ];
  const [curIndex, setCurIndex] = useState(0);

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setCurIndex(randomIndex);
  };

  const increment = () => {
    if (curIndex === colors.length - 1) {
      setCurIndex(0);
      return;
    }
    setCurIndex(curIndex + 1);
  };
  const decrement = () => {
    if (curIndex === 0) {
      setCurIndex(colors.length - 1);
      return;
    }
    setCurIndex(curIndex - 1);
  };

  return (
    <>
      <button>Background colors: {colors.toString()}</button>
      <div className="container" style={{ backgroundColor: colors[curIndex] }}>
        <button className="bgcColor" onClick={changeColor}>
          Change Color
        </button>
        <button onClick={decrement}>Prev color</button>
        <button onClick={increment}>Next color</button>
      </div>
    </>
  );
}

export default App;
