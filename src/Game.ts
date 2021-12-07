class Game {
  private piece = Game.makePieces();

  private static makePieces() {
    return [
      new King("White", "E", 1),
      new King("Black", "E", 8),
      new Queen("White", "D", 1),
      new Queen("Black", "D", 8),
    ];
  }
}
