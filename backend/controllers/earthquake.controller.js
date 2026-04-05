import { fetchEarthquakes } from "../services/usgs.service.js";
import { getAlertLevel } from "../services/alert.service.js";

export const getEarthquakes = async (req, res) => {
  try {
    const { lat, lon } = req.query;

    const data = await fetchEarthquakes();

    if (!lat || !lon) {
      return res.json(data);
    }

    const result = data.map((eq) =>
      getAlertLevel(eq, parseFloat(lat), parseFloat(lon))
    );

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Error processing alerts" });
  }
};