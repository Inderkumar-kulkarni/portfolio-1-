import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

const clientOrigins = [
  process.env.CLIENT_ORIGIN || "http://localhost:5173",
  "http://127.0.0.1:5173",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || clientOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio backend is running.");
});

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  connectDB();
});
