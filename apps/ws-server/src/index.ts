import { WebSocketServer } from "ws";
import { prismaClient } from "@repo/db/client";

const ws = new WebSocketServer({ port: 8080 });

ws.on("connection", async (socket) => {
  await prismaClient.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  socket.send("Hello you are connected to the server");
});
