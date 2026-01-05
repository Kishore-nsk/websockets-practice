import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("listening", () => {
  console.log("WebSocket Server listening on port 8080");
});

wss.on("connection", (socket) => {
  socket.on("message", (data) => {
    try {
      //@ts-ignore
      let dataObject = JSON.parse(data);
      socket.send(JSON.stringify(dataObject));
    } catch (error) {
      console.error(`Invalid JSON: ${error}`);
    }
  });
});
