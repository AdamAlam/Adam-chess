import { ChessBoard } from "../chess-logic/chess-board";
import { FENChar, pieceImagePaths } from "../chess-logic/models";
import "./ChessBoard.css";

const ChessBoardComponent = () => {
  const chessBoard = new ChessBoard();
  const chessBoardView: (FENChar | null)[][] = chessBoard.chessBoardView;
  const getPlayerColor = () => chessBoard.playerColor;

  return (
    <div className="chess-board">
      {chessBoardView.map((row, x) => (
        <div key={x} className="row">
          {row.map((piece, y) => (
            <div
              key={y}
              className={`square ${
                ChessBoard.isSquareDark(x, y) ? "dark" : "light"
              }`}
            >
              {piece && (
                <img
                  src={pieceImagePaths[piece]}
                  alt={piece}
                  className="piece"
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default ChessBoardComponent;
