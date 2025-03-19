import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  contestId: { type: mongoose.Schema.Types.ObjectId, ref: "Contest", required: true },
  name: { type: String, required: true },
  platform: { type: String, required: true },
  url: { type: String, required: true },
  startTime: { type: Date, required: true },
  duration: { type: Number, required: true },
  status: { type: String, enum: ["upcoming", "past"], required: true },
  createdAt: { type: Date, default: Date.now },
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);
export default Bookmark;
