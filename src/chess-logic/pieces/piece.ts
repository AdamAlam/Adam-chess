import { FENChar, Coords, Color } from "../models";

export abstract class Piece {
  protected abstract _FENChar: FENChar;
  protected abstract _directions: Coords[];

  constructor(private _color: Color) {}

  public get FENChar(): FENChar {
    return this._FENChar;
  }

  public get directions(): Coords[] {
    return this._directions;
  }

  public get pieceColor(): Color {
    return this._color;
  }
}
