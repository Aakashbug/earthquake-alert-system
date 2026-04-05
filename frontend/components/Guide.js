"use client";

export default function Guide() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>📘 Earthquake Safety Guide</h2>

      <h3>🟢 Before Earthquake</h3>
      <ul>
        <li>Prepare emergency kit (water, food, torch)</li>
        <li>Secure heavy furniture</li>
        <li>Know safe spots (under table)</li>
      </ul>

      <h3>🟡 During Earthquake</h3>
      <ul>
        <li>Drop, Cover, Hold</li>
        <li>Stay away from windows</li>
        <li>Do not use elevators</li>
      </ul>

      <h3>🔴 After Earthquake</h3>
      <ul>
        <li>Check for injuries</li>
        <li>Avoid damaged buildings</li>
        <li>Follow official alerts</li>
      </ul>
    </div>
  );
}