require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

const posts = [
  { username: "Kyle", title: "Post 1" },
  { username: "Jim", title: "Post 2" },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/login", (req, res) => {
  // Authenticate user
  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];
}

app.listen(3000);
