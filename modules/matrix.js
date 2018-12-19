var Grass = require("./class.grass");
var GrassEater = require("./class.eatgrass");
var Gishatich = require("./class.predator");
var Sunk = require("./class.mushroom");
var Bee = require("./class.bee");


var matrix = [];
var m = 50;
var n = 50;

for (var y = 0; y < m; y++) {
    matrix[y] = [];
    for (var x = 0; x < n; x++) {
        matrix[y][x] = Math.floor(Math.random() * 6);
    }
}
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

        if (matrix[y][x] == 1) {
            matrix[y][x] = new Grass(x, y, 1);
        }
        else if (matrix[y][x] == 2) {
            matrix[y][x] = new GrassEater(x, y, 2);
        }
        else if (matrix[y][x] == 3) {
            matrix[y][x] = new Gishatich(x, y, 3);
        }
        else if (matrix[y][x] == 4) {
            matrix[y][x] = new Sunk(x, y, 4);
        }
        else if (matrix[y][x] == 5) {
            matrix[y][x] = new Bee(x, y, 5);
        }
    }
}


module.exports = matrix;
