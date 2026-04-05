import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes.js";
import earthquakeRoutes from "./routes/earthquake.routes.js";
import sosRoutes from "./routes/sos.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);

app.use("/api/earthquakes", earthquakeRoutes);

app.use("/api/sos", sosRoutes);

export default app;