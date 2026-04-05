"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import SOSButton from "../components/SOSButton";
import Guide from "../components/Guide";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        🌍 Earthquake Alert System
      </h1>

      <button
        onClick={() => setShowGuide(!showGuide)}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 1000,
          padding: "10px",
          background: "blue",
          color: "white",
          borderRadius: "8px",
        }}
      >
        📘 Guide
      </button>

      <SOSButton />

      {showGuide ? <Guide /> : <Map />}
    </div>
  );
}