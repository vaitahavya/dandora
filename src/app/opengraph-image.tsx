import { ImageResponse } from "next/og";

export const alt = "Dandora — Growth, engineered.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "84px",
          background: "linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 38,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            opacity: 0.92,
          }}
        >
          dandora.online
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 148,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Dandora
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontWeight: 500,
              marginTop: 18,
              opacity: 0.95,
            }}
          >
            Growth, engineered.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 400,
            opacity: 0.88,
          }}
        >
          Strategy · Brand · Software — under one roof
        </div>
      </div>
    ),
    { ...size }
  );
}
