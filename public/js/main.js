const ws = new WebSocket(location.origin.replace("http", "ws"));

ws.addEventListener("open", () => {
  console.log("opened");
});

ws.addEventListener("close", () => {
  console.log("closed");
});
