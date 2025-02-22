import { useState } from "react";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";

const App = () => {
  const [scores, setScores] = useState({ red: 0, yellow: 0 });

  const updateScore = (winner) => {
    setScores((prev) => ({ ...prev, [winner]: prev[winner] + 1 }));
  };

  return (
    <div className="flex flex-col items-center bg-purple-600 min-h-screen p-8">
      <ScoreBoard scores={scores} />
      <Board updateScore={updateScore} />
    </div>
  );
};

export default App;
