var matrix = [];
var m = 50;
var n = 50;
var side = 20;
var socket;

function setup() {
  socket = io();
  frameRate(0);

  socket.on("FirstMatrix", function (mtx) {
    matrix = mtx;
    createCanvas(matrix[0].length * side, matrix.length * side, side, side);
    console.log(matrix);
  });
}

function draw() {

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill('green');
        rect(x * side, y * side, side, side);

      }
      else if (matrix[y][x] == 2) {
        fill('yellow');
        rect(x * side, y * side, side, side);
        matrix[y][x].acted = false;
      }
      else if (matrix[y][x] == 3) {
        fill('red');
        rect(x * side, y * side, side, side);
        matrix[y][x].acted = false;
      }
      else if (matrix[y][x] == 4) {
        fill('orange');
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 5) {
        fill('black');
        rect(x * side, y * side, side, side);
        matrix[y][x].acted = false;
      }
      else {
        fill('#acacac');
        rect(x * side, y * side, side, side);
      }

    }
  }
}


