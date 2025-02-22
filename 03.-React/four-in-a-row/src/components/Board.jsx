import { useState } from "react";
import Cell from "./Cell";

const ROWS = 6;
const COLS = 7;

const Board = ({ updateScore }) => {
  const [board, setBoard] = useState(Array(ROWS).fill(null).map(() => Array(COLS).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState("red");

  const dropDisc = (col) => {
    const newBoard = [...board];
    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newBoard[row][col]) {
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);
        if (checkWin(newBoard, row, col, currentPlayer)) {
          updateScore(currentPlayer);
          alert(`${currentPlayer.toUpperCase()} Wins!`);
          resetGame();
        } else {
          setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
        }
        break;
      }
    }
  };

  const checkWin = (board, row, col, player) => {
    const directions = [[1, 0], [0, 1], [1, 1], [1, -1]];
    for (let [dx, dy] of directions) {
      let count = 1;
      for (let dir = -1; dir <= 1; dir += 2) {
        let x = row + dir * dx;
        let y = col + dir * dy;
        while (x >= 0 && x < ROWS && y >= 0 && y < COLS && board[x][y] === player) {
          count++;
          x += dir * dx;
          y += dir * dy;
        }
      }
      if (count >= 4) return true;
    }
    return false;
  };

  const resetGame = () => {
    setBoard(Array(ROWS).fill(null).map(() => Array(COLS).fill(null)));
    setCurrentPlayer("red");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-7 gap-2 p-4 bg-blue-500 rounded-lg">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Cell key={`${rowIndex}-${colIndex}`} value={cell} onClick={() => dropDisc(colIndex)} />
          ))
        )}
      </div>
      <button onClick={resetGame} className="mt-4 bg-gray-700 text-white px-4 py-2 rounded">
        Restart
      </button>
    </div>
  );
};

export default Board;
