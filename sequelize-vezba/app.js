require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => res.json("Heloooo"));

const PORT = process.env.ENV_PORT || 5000;

app.listen(PORT, console.log(`Listening on port ${PORT}`));
