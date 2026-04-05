"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Map() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/earthquakes?lat=28.61&lon=77.23"
      );
      setData(res.data);
    };

    fetchData();
  }, []);

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: "90vh" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {data.map((eq, i) => {
        const [lon, lat] = eq.geometry.coordinates;

        return (
          <Marker key={i} position={[lat, lon]}>
            <Popup>
              <b>{eq.properties.place}</b> <br />
              Magnitude: {eq.properties.mag} <br />
              Alert: {eq.alert} <br />
              Distance: {eq.distance} km
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}