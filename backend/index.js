import express from "express";
import cors from "cors";
import dns from "node:dns/promises";
import "dotenv/config";
import connectDB from "./Configs/db.js";
import AuthRouter from "./Routes/userRoutes.js";
import BlogRouter from "./Routes/blogRoutes.js";
import commentRoutes from "./Routes/commentsRoutes.js";
import mailingRoutes from "./Routes/mailingRoutes.js";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.use("/", AuthRouter);
app.use("/", BlogRouter);
app.use("/", commentRoutes);
app.use("/", mailingRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB(); // this will process.exit(1) if it fails, so listen never runs on a dead DB
  app.listen(PORT, () => console.log(`App running on Port ${PORT}`));
};

startServer();
