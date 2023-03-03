// const http = require("http");
// const fs = require("fs");
// const port = 3000;

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   fs.readFile("index.html", function (error, data) {
//     if (error) {
//       res.writeHead(404);
//       res.write("Error: File not found");
//     } else {
//       res.write(data);
//     }
//   });
//   res.end();
// });

// server.listen(port, function (error) {
//   if (error) {
//     console.log("Something went wrong.", error);
//   } else {
//     console.log("server is listening on port " + port);
//   }
// });

// const ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
// ws.onopen = () => {
//   ws.send(JSON.stringify({}))
// };

const ws = require("ws");
const w = new ws("wss://api-pub.bitfinex.com/ws/2");

w.on("message", (msg) => console.log(JSON.parse(msg)));

let msg = JSON.stringify({
  event: "subscribe",
  channel: "ticker",
  symbol: "tBTCUSD",
});

w.on("open", () => w.send(msg));
