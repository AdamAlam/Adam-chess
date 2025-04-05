export enum Color {
  White,
  Black,
}

export type Coords = {
  x: number;
  y: number;
};

export enum FENChar {
  WhitePawn = "P",
  WhiteKnight = "N",
  WhiteBishop = "B",
  WhiteRook = "R",
  WhiteQueen = "Q",
  WhiteKing = "K",
  BlackPawn = "p",
  BlackKnight = "n",
  BlackBishop = "b",
  BlackRook = "r",
  BlackQueen = "q",
  BlackKing = "k",
}

export const pieceImagePaths: Readonly<Record<FENChar, string>> = {
  [FENChar.WhitePawn]: "src/assets/Merida_shaded/wp.svg",
  [FENChar.WhiteKnight]: "src/assets/Merida_shaded/wn.svg",
  [FENChar.WhiteBishop]: "src/assets/Merida_shaded/wb.svg",
  [FENChar.WhiteRook]: "src/assets/Merida_shaded/wr.svg",
  [FENChar.WhiteQueen]: "src/assets/Merida_shaded/wq.svg",
  [FENChar.WhiteKing]: "src/assets/Merida_shaded/wk.svg",
  [FENChar.BlackPawn]: "src/assets/Merida_shaded/bp.svg",
  [FENChar.BlackKnight]: "src/assets/Merida_shaded/bn.svg",
  [FENChar.BlackBishop]: "src/assets/Merida_shaded/bb.svg",
  [FENChar.BlackRook]: "src/assets/Merida_shaded/br.svg",
  [FENChar.BlackQueen]: "src/assets/Merida_shaded/bq.svg",
  [FENChar.BlackKing]: "src/assets/Merida_shaded/bk.svg",
};
