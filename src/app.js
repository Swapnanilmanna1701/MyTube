import express from "express";
import cors from "cors"; // this is a middleware
import cookieparser from "cookie-parser"; // this is a middlewares

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieparser());

//routes import
import userRouter from "./routes/user.routes.js";


//routes declaration
app.use("/api/v1/users", userRouter);
export { app };