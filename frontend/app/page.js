"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        🌍 Earthquake Alert System
      </h1>
      <Map />
    </div>
  );
}