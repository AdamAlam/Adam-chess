import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ChessBoard } from "./chess-logic/chess-board";
import ChessBoardComponent from "./ChessBoard/ChessBoard";

function App() {
  return <ChessBoardComponent />;
}

export default App;
