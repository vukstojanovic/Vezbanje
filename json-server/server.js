const jsonServer = require("json-server-relationship");
const server = jsonServer.create();
const router = jsonServer.router("./database/db.json");
const middlewares = jsonServer.defaults();
const authToken = require("./middleware/authenticateToken");

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

// Use default router
// server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});
