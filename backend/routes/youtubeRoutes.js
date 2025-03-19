import express from "express";
import { fetchYouTubeVideos } from "../controllers/youtubeController.js";

const router = express.Router();
router.post("/youtube_video", fetchYouTubeVideos);

export default router; // ✅ Export as default
