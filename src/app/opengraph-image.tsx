import { ImageResponse } from "next/og";
import { brand } from "@/data/site";

/**
 * The share card every page falls back to when it does not set its own image —
 * links to the site in a chat or a tweet render as this rather than a bare
 * URL. Individual pages (weddings especially) override it with a real
 * photograph via `openGraph.images`.
 *
 * Kept to system fonts on purpose: no network fetch at build, nothing to go
 * stale. 1200x630 is the size Google, Facebook, WhatsApp and X all expect.
 * Satori needs an explicit `display` on every element with more than one child.
 */
export const alt = `${brand.name} — ${brand.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1b1917",
          color: "#faf6ef",
          fontFamily: "Georgia, 'Times New Roman', serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#c6a15b",
          }}
        >
          {brand.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 66,
            lineHeight: 1.15,
            textAlign: "center",
          }}
        >
          Luxury Indian Wedding Photography &amp; Films
        </div>
        <div
          style={{
            marginTop: 34,
            fontSize: 25,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(250,246,239,0.6)",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          Lucknow · across India · worldwide
        </div>
      </div>
    ),
    size
  );
}
