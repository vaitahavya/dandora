import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Dandora — Growth, engineered.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // The reversed (white) lockup reads cleanly on the indigo→cyan gradient.
  // Inline it as a base64 SVG data URI — Satori renders this far more reliably
  // than referencing the file by path.
  const logo = await readFile(
    join(process.cwd(), "public", "dandora-online-reversed.svg"),
    "base64"
  );
  const logoSrc = `data:image/svg+xml;base64,${logo}`;

  // reversed.svg viewBox is 883.38 × 178.73 (≈4.94:1).
  const logoWidth = 760;
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
            fontSize: 34,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            opacity: 0.9,
          }}
        >
          dandora.online
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src={logoSrc}
            width={logoWidth}
            height={logoHeight}
            alt="Dandora"
          />
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontWeight: 500,
              marginTop: 36,
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
