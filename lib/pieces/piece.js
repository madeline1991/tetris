class Piece {

  constructor(options) {
    this.symbol = options.symbol;
    this.defaultPosition = options.defaultPosition;
    this.currentPositions = this.defaultPosition;
  }

  moveDown() {
    this.currentPositions.forEach((space) => {
      space[0] ++;
    });
  }

  moveLeft() {
    this.currentPositions.forEach((space) => {
      space[1] -= 1;
    });
  }

  moveRight() {
    this.currentPositions.forEach((space) => {
      space[1] += 1;
    });
  }

  rotatePiece(){
    const pivot = this.currentPositions[2];
    const pivotX = pivot[1];
    const pivotY = pivot[0];
    for (let i = 0; i < this.currentPositions.length; i++) {
      const x = this.currentPositions[i][1];
      const y = this.currentPositions[i][0];
      this.currentPositions[i] = this.clockwiseRotation(pivotX, pivotY, x, y, -90);
    }

  }

  clockwiseRotation(pivotX, pivotY, x, y, angle) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - pivotX)) + (sin * (y - pivotY)) + pivotX,
        ny = (cos * (y - pivotY)) - (sin * (x - pivotX)) + pivotY;
    return [Math.round(ny), Math.round(nx)];
  }

}

export default Piece;
