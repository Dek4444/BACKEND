import express from "express";
import cors from "cors";
import routes from "../routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "EVENTMS API is running" });
});

app.use("/api", routes);

export default app;
