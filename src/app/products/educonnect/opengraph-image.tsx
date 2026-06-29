import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "EduConnect — Smart school management · a dandora.online product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // White reversed lockup for the "by dandora.online" brand endorsement.
  const logo = await readFile(
    join(process.cwd(), "public", "dandora-online-reversed.svg"),
    "base64"
  );
  const logoSrc = `data:image/svg+xml;base64,${logo}`;

  // reversed.svg viewBox is 883.38 × 178.73 (≈4.94:1).
  const logoWidth = 320;
  const logoHeight = Math.round((logoWidth * 178.73) / 883.38);

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
            gap: 18,
            fontSize: 30,
            fontWeight: 500,
            opacity: 0.92,
          }}
        >
          <span style={{ display: "flex" }}>a</span>
          <img
            src={logoSrc}
            width={logoWidth}
            height={logoHeight}
            alt="dandora.online"
          />
          <span style={{ display: "flex" }}>product</span>
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
