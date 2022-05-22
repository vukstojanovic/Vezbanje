import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

const app = express();
dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Welcome!!!");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
// app.listen(port, console.log("listening on port 5000"));

async function start() {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`listening on port ${process.env.PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start();
