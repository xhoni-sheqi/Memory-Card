import { useState } from "react";
import ButtonDifficult from "./components/ButtonDifficult.jsx";
import MemoryCards from "./components/MemoryCards.jsx";

function App() {
  const [gamePhase, setGamePhase] = useState("menu"); // game , victory / lost
  const [difficulty, setDifficulty] = useState(null);

  const handleSetDifficulty = (mode) => {
    setDifficulty(mode);
    setGamePhase("game");
  };

  return (
    <div className="container">
      {gamePhase === "menu" && (
        <div className="menu">
          <h1>Memory Game</h1>
          <ButtonDifficult onSetDifficulty={() => handleSetDifficulty("easy")}>
            Easy
          </ButtonDifficult>
          <ButtonDifficult
            onSetDifficulty={() => handleSetDifficulty("medium")}
          >
            Medium
          </ButtonDifficult>
          <ButtonDifficult onSetDifficulty={() => handleSetDifficulty("hard")}>
            Hard
          </ButtonDifficult>
        </div>
      )}
      {gamePhase === "game" && <MemoryCards difficulty={difficulty} />}
    </div>
  );
}

export default App;
