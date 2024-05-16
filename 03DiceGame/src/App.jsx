import { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";
import "./App.css";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGameplay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
    {
    isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGameplay} />
    }
    </>
  );
}

export default App;
