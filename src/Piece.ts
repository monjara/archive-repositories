type Color = "Black" | "White";
type File = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

abstract class Piece {
  protected position: Position;

  constructor(
    private readonly color: Color,
    public file: File,
    public rank: Rank
  ) {
    this.position = new Position(file, rank);
  }

  moveTo(position: Position) {
    this.position = position;
  }

  abstract canMoveTo(position: Position): boolean;
}
