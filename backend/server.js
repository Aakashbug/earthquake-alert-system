import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import app from "./app.js";
import connectDB from "./config/db.js";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env
dotenv.config();

// Debug
console.log("ENV:", process.env.MONGO_URI);

const startServer = async () => {
  try {
    console.log("Starting server...");

    await connectDB();

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });

  } catch (error) {
    console.error(error);
  }
};

startServer();