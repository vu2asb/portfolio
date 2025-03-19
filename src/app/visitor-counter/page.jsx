"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    fetch("/api/visitorCounterAPI")  // ✅ Correct API route
      .then((response) => response.json())
      .then((data) => setVisitorCount(data.count))
      .catch((error) => console.error("Error fetching visitor count:", error));
  }, []);
  

  return (
    <div>
      <h1>Welcome to My Website</h1>
      <p>You are visitor number: {visitorCount}</p>
    </div>
  );
}
