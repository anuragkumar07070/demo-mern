import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Checking backend...");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend API is not connected"));
  }, []);

  return (
    <main className="container">
      <h1>MERN Demo 🚀</h1>
      <p>Simple MERN-style project for testing Vercel deployment.</p>

      <div className="card">
        <h2>Frontend</h2>
        <p>React + Vite</p>
      </div>

      <div className="card">
        <h2>Backend</h2>
        <p>{message}</p>
      </div>

      <p className="note">
        MongoDB is intentionally not connected. This project is only for
        deployment testing.
      </p>
    </main>
  );
}