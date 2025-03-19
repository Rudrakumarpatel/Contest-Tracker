import express from "express";
import { fetchContests } from "../controllers/contestController.js";

const router = express.Router();

router.get("/fetch", fetchContests);

export default router;
