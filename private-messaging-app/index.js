import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
const app = express();
const server = createServer(app);
const io = new Server(server);

const activeUsers = {};

app.get("/", (req, res) => {
  res.sendFile("/Users/gauravp7/Desktop/Node/private-messaging-app/index.html");
});
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("login", (username) => {
    activeUsers[socket.id] = username;
    io.emit("active-users", Object.values(activeUsers));
  });

  socket.on("private-message", (data) => {
    const recipientSocketId = Object.keys(activeUsers).find(
      (socketId) => activeUsers[socketId] === data.recipient
    );
    const senderSocketId = Object.keys(activeUsers).find(
      (socketId) => activeUsers[socketId] === data.sender
    );

    console.log(data);
    if (recipientSocketId && senderSocketId) {
      io.to(recipientSocketId).emit("private-message", {
        sender: activeUsers[socket.id],
        message: data.message,
      });

      io.to(senderSocketId).emit("private-message", {
        sender: "YOU",
        message: data.message,
      });
    }
  });

  socket.on("disconnect", () => {
    if (activeUsers[socket.id]) {
      delete activeUsers[socket.id];
      io.emit("active-users", Object.values(activeUsers));
      console.log("A user disconnected");
    }
  });
});
server.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
