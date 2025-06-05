const express = require("express");
const socket = require("socket.io");
const http = require("http");
const { Chess } = require("chess.js");
const path = require("path");
const { log } = require("console");

const app = express();
//created server using http mthis is node not express
//agar humko socket io chalana hai
//express me toh ye steps jaruri hai
//we are linking express server with http server for
//socket io
const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();

let players = {};
let currentPlayer = "W";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { title: "Chess game using backend" });
});

//jab bhi koi hmare server se judega toh connection
//banega ya connect hoga unique user milega wahi socket hai
io.on("connection", (socket) => {
  console.log("connected");

  //   socket.on("churan", () => {
  //     //sab ko data bhejna hai toh
  //     io.emit("Churan papadi");
  //     console.log("Churan received");
  //   });

  if (!players.white) {
    players.white = socket.id;
    socket.emit("playerRole", "w");
  } else if (!players.black) {
    players.black = socket.id;
    socket.emit("playerRole", "b");
  } else {
    socket.emit("spectatorRole");
  }

  //if player get disconnected
  socket.on("disconnect", () => {
    if (socket.id === players.white) {
      delete players.white;
    } else if (socket.id === players.black) {
      delete players.black;
    }
  });

  socket.on("move", (move) => {
    try {
      if (chess.turn() === "w" && socket.id !== players.white) return;
      if (chess.turn() === "b" && socket.id !== players.black) return;

      const result = chess.move(move);
      if (result) {
        currentPlayer = chess.turn();
        io.emit("move", move);
        io.emit("boardState", chess.fen());
      } else {
        console.log("Invalid move : ", move);
        socket.emit("InvalidMove", move);
      }
    } catch (error) {
      console.log(error);
      console.log("Invalid move : ", move);
    }
  });
});

server.listen(3000, () => {
  console.log("The server is running...");
});
