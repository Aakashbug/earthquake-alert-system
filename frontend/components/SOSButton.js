"use client";

import axios from "axios";

export default function SOSButton() {
  const sendSOS = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      await axios.post("http://localhost:5000/api/sos", {
        name: "User",
        latitude,
        longitude,
        message: "Emergency!",
      });

      alert("SOS Sent!");
    });
  };

  return (
    <button
  onClick={sendSOS}
  style={{
    position: "absolute",
    top: 20,
    right: 20,
    background: "red",
    color: "white",
    padding: "12px",
    borderRadius: "10px",
    zIndex: 1000,   // ✅ IMPORTANT FIX
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  }}
>
  🚨 SOS
</button>
  );
}