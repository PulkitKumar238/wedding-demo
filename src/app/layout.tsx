import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { JsonLd } from "@/components/seo/json-ld";
import { businessNode, websiteNode, graph } from "@/lib/seo";
import { brand, siteUrl } from "@/data/site";
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
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Click Weds — Luxury Indian Wedding Photography, Lucknow & Worldwide",
    template: "%s — Click Weds",
  },
  description:
    "Click Weds is a luxury wedding photography and film studio in Hazratganj, Lucknow, documenting Indian weddings across Uttar Pradesh, India and worldwide. Candid photography, cinematic films, packages from ₹80,000.",
  applicationName: brand.name,
  authors: [{ name: brand.name, url: siteUrl }],
  creator: brand.name,
  publisher: brand.name,
  keywords: [
    "wedding photographer Lucknow",
    "wedding photography Lucknow",
    "candid wedding photographer Lucknow",
    "luxury wedding photography India",
    "cinematic wedding films Lucknow",
    "pre-wedding shoot Lucknow",
    "wedding videographer Lucknow",
    "destination wedding photographer India",
  ],
  alternates: { canonical: "/" },
  category: "Wedding Photography",
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    title:
      "Click Weds — Luxury Indian Wedding Photography, Lucknow & Worldwide",
    description:
      "Extraordinary Indian weddings, photographed and filmed across India and worldwide.",
    url: siteUrl,
    siteName: "Click Weds",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Click Weds — Luxury Indian Wedding Photography",
    description:
      "Extraordinary Indian weddings, photographed and filmed across India and worldwide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // A photography site lives or dies on the size of its result thumbnails.
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in the Vercel project once the
  // property is added in Google Search Console (skip if verifying by DNS).
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
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
        <JsonLd data={graph(businessNode(), websiteNode())} />
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
