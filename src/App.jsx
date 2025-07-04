import { useState } from "react";
import ButtonDifficult from "./components/ButtonDifficult";

function App() {
  const [gameState, setGameState] = useState("selecting"); // countdown , playing , lose/completed
  const [difficulty, setDifficulty] = useState(null);
  const [memoryCards, setMemoryCards] = useState([]);
  const [selectedMemoryCards, setSelectedMemoryCards] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleFetchData = () => {};

  const handleSetGameDifficult = (typeOfDifficulty) => {
    setDifficulty(typeOfDifficulty);
    setGameState("countdown");
  };

  return (
    <div>
      {gameState === "selecting" && (
        <div className="selecting">
          <h1>Seleziona Difficoltà :</h1>
          <ButtonDifficult onClick={() => handleSetGameDifficult("easy")}>
            Easy
          </ButtonDifficult>
          <ButtonDifficult onClick={() => handleSetGameDifficult("medium")}>
            Medium
          </ButtonDifficult>
          <ButtonDifficult onClick={() => handleSetGameDifficult("hard")}>
            Hard
          </ButtonDifficult>
        </div>
      )}
    </div>
  );
}

export default App;
