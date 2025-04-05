import { Color, Coords, FENChar } from "../models";
import { Piece } from "./piece";

export class Pawn extends Piece {
  private _hasMoved: boolean = false;
  protected override _FENChar: FENChar;
  protected override _directions: Coords[] = [
    { x: 0, y: 1 },
    { x: 2, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: -1 },
  ];

  constructor(pieceColor: Color) {
    super(pieceColor);
    this._FENChar =
      pieceColor === Color.White ? FENChar.WhitePawn : FENChar.BlackPawn;
  }

  private setBlackPawnDirection() {
    this._directions = this._directions.map((direction) => {
      return {
        x: -direction.x,
        y: direction.y,
      };
    });
  }

  public get hasMoved(): boolean {
    return this._hasMoved;
  }

  public set hasMoved(_) {
    this._hasMoved = true;
    this._directions = [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: -1 },
    ];
    if (this.pieceColor === Color.Black) {
      this.setBlackPawnDirection();
    }
  }
}
