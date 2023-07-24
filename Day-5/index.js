import express from "express";
const app = express();
import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);

const users = [];

app.get("/", (req, res) => {
  res.sendFile("/Users/gauravp7/Desktop/Node/Day-5" + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("new-user", (name) => {
    users.push(name);
    io.emit("user-list", users);
    socket.broadcast.emit("user-connected", name);
  });
  socket.on("send-chat-message", (message) => {
    socket.broadcast.emit("chat-message", {
      message: message,
      name: users[socket.id],
    });
  });
  socket.on("disconnect", () => {
    socket.broadcast.emit("user-disconnected", users[socket.id]);
    delete users[socket.id];
  });
});
server.listen(3000, () => {
  console.log("listening on *:3000");
});
