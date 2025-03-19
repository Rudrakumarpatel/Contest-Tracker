import mongoose from "mongoose";

const contestSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
  startTime: { type: Date, required: true },
  duration: { type: Number, required: true },
  status: { type: String, enum: ["upcoming", "past"], required: true },
  solutionUrl: { type: String, default: "" },
});

const Contest = mongoose.model("Contest", contestSchema);
export default Contest;
