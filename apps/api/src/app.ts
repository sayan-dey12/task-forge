import express from "express";
import type {Application , Request , Response} from "express";
import cors from "cors";

const app : Application = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "TaskForge API is running",
  });
});

export default app;