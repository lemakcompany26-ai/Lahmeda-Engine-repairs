
import React from "react";

export default function NotFound() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      background: "#071b35",
      color: "white",
      padding: "25px"
    }}>
      <div>
        <h1 style={{ fontSize: "90px", color: "#ffc400", margin: 0 }}>
          404
        </h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <a
          href="/"
          style={{
            display: "inline-block",
            background: "#ffc400",
            color: "#071b35",
            padding: "14px 25px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Return Home
        </a>
      </div>
    </main>
  );
}
