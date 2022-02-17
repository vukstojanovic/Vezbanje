const express = require("express");
const path = require("path");
const logger = require("./middlewares/logger");
const router = require("./routes/api/members");

const app = express();

app.use(express.json());

app.use("/api/members", router);

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
