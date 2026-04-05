import { fetchEarthquakes } from "../services/usgs.service.js";

export const getEarthquakes = async (req, res) => {
  try {
    const data = await fetchEarthquakes();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching earthquakes" });
  }
};