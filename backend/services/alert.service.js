import { calculateDistance } from "../utils/distance.js";

export const getAlertLevel = (earthquake, userLat, userLon) => {
  const [lon, lat] = earthquake.geometry.coordinates;

  const distance = calculateDistance(userLat, userLon, lat, lon);

  // ✅ FIX: handle null magnitude
  const magnitude = earthquake.properties.mag || 0;

  let alert = "LOW";

  if (magnitude >= 6 || distance < 50) {
    alert = "HIGH";
  } else if (magnitude >= 4.5 || distance < 150) {
    alert = "MEDIUM";
  }

  return {
    ...earthquake,
    distance: Number(distance.toFixed(2)), // clean output
    alert,
  };
};