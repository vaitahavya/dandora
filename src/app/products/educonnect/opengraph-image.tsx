import { ImageResponse } from "next/og";

export const alt = "EduConnect — Smart school management · a dandora.online product";
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
            alignItems: "center",
            gap: 16,
            fontSize: 34,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            opacity: 0.92,
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "8px 20px",
              borderRadius: 999,
              border: "2px solid rgba(255,255,255,0.55)",
              fontSize: 26,
            }}
          >
            a dandora.online product
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 128,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            EduConnect
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 52,
              fontWeight: 500,
              marginTop: 18,
              opacity: 0.95,
            }}
          >
            Smart school management
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 400,
            opacity: 0.88,
          }}
        >
          ERP · Attendance · Fees · Academics · Parent app
        </div>
      </div>
    ),
    { ...size }
  );
}
