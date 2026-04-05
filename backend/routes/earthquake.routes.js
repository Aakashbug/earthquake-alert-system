import express from "express";
import { getEarthquakes } from "../controllers/earthquake.controller.js";

const router = express.Router();

router.get("/", getEarthquakes);

export default router;   // ✅ VERY IMPORTANT LINE