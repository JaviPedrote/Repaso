const ScoreBoard = ({ scores }) => {
    return (
      <div className="flex justify-between w-full p-4">
        <div className="text-white text-xl">🔴 Player 1: {scores.red}</div>
        <div className="text-white text-xl">🟡 Player 2: {scores.yellow}</div>
      </div>
    );
  };
  
  export default ScoreBoard;
  