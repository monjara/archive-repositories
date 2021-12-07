type Color = "Black" | "White";

class Piece {
  protected position: Position;

  constructor(private readonly color: Color, file: File, rank: Rank) {
    this.position = new Position(file, rank);
  }
}
