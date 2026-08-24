import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clickweds.com"),
  title: {
    default: "Click Weds — Luxury Indian Wedding Photography, Lucknow & Worldwide",
    template: "%s — Click Weds",
  },
  description:
    "Click Weds is a luxury wedding photography and film studio based in Lucknow, documenting Indian celebrations across India and worldwide.",
  keywords: [
    "wedding photographer Lucknow",
    "luxury wedding photography India",
    "candid wedding photographer Lucknow",
    "pre-wedding shoot Lucknow",
    "Indian wedding films",
  ],
  openGraph: {
    title: "Click Weds — Luxury Indian Wedding Photography, Lucknow & Worldwide",
    description:
      "Extraordinary Indian weddings, photographed across India and worldwide.",
    url: "https://clickweds.com",
    siteName: "Click Weds",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Click Weds — Luxury Indian Wedding Photography",
    description:
      "Extraordinary Indian weddings, photographed across India and worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal font-body">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingActions />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
