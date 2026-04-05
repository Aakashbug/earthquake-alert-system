import SOS from "../models/SOS.js";

export const createSOS = async (req, res) => {
  try {
    const sos = await SOS.create(req.body);
    res.json({ message: "SOS Sent", sos });
  } catch (error) {
    res.status(500).json({ message: "Error sending SOS" });
  }
};