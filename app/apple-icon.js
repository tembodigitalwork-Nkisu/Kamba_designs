import { ImageResponse } from "next/og";

// Apple touch icon (home-screen bookmark on iOS). The Kamba framed-"K"
// monogram, inverted for contrast on a dark home screen: wine ground,
// ivory frame + mark. Mirrors app/icon.svg so the bookmark is the real logo.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#9c2d3b",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32" fill="none">
          <path d="M8.25 3.5 H23.75 V28.5 H8.25 Z" stroke="#fbf7f0" strokeWidth="1.2" />
          <path d="M14.4 8.5 V13" stroke="#fbf7f0" strokeWidth="1.6" />
          <path d="M18.2 9 L13.1 16.4 L18.6 24" stroke="#fbf7f0" strokeWidth="1.6" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
