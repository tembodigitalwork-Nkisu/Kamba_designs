import { ImageResponse } from "next/og";

// Browser tab favicon, generated at build time. Wine "K" on the ivory ground,
// matching the brand tokens. No binary asset to keep in the repo.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fbf7f0",
          color: "#9c2d3b",
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        K
      </div>
    ),
    { ...size }
  );
}
