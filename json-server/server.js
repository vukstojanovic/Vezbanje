const jsonServer = require("json-server-relationship");
const server = jsonServer.create();
const router = jsonServer.router("./database/db.json");
const middlewares = jsonServer.defaults();
const authToken = require("./middleware/authenticateToken");

// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.use(express.json());
// app.use(cors());

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.use("/echo", (req, res) => {
  res.json([{ mechandise: "suitcase", price: "25$" }]);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use("/auth", require("./routes/auth"));
server.use("/hello", authToken, router);
server.use("/user", authToken, require("./routes/me"));

// Use default router
// server.use(router);
server.listen(4000, () => {
  console.log("JSON Server is running on port 4000");
});
