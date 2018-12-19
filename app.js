var express = require('express');
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);


app.use(express.static("./public"));

app.get("/", function(req, res){
  res.redirect("./public/index.html")
});

server.listen(3000);

var matrix = require("./modules/matrix");
console.log(matrix);

io.on("connection", function(socket){
  socket.emit("FirstMatrix", matrix);
});



// setInterval(draw, 200);
// function draw() {

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x].index == 1) {
//                 matrix[y][x].mul();
//             }
//             else if (matrix[y][x].index == 2) {
//                 matrix[y][x].eat();

//             }
//             else if (matrix[y][x].index == 3) {
//                 matrix[y][x].eat();
//             }
//             else if (matrix[y][x].index == 4) {
//                 matrix[y][x].mul();
//             }
//             else if (matrix[y][x].index == 5) {
//                 matrix[y][x].eat();
//             }
//         }
//     }

// }