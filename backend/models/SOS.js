import mongoose from "mongoose";

const sosSchema = new mongoose.Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("SOS", sosSchema);