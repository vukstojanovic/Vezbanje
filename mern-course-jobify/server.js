import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  throw new Error("error hapened people!!!");
  return res.send("Welcome!!!");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("listening on port 5000"));
