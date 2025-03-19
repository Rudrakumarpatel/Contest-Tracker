import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import contestRoutes from "./routes/contestRoutes.js";
import youtubeRoutes from "./routes/youtubeRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/contests", contestRoutes);
app.use("/api/youtube", youtubeRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
