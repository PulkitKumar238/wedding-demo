import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
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
  metadataBase: new URL("https://maisonamoret.com"),
  title: {
    default: "Maison Amoret — Luxury Wedding Design, Florence & the Mediterranean",
    template: "%s — Maison Amoret",
  },
  description:
    "Maison Amoret is a luxury wedding design atelier based in Florence, crafting extraordinary celebrations across Italy, the Amalfi Coast, Lake Como, and the Mediterranean.",
  keywords: [
    "luxury wedding planner Italy",
    "destination wedding Florence",
    "Amalfi Coast wedding planner",
    "Lake Como wedding design",
    "luxury wedding florist",
  ],
  openGraph: {
    title: "Maison Amoret — Luxury Wedding Design, Florence & the Mediterranean",
    description:
      "Extraordinary weddings, designed across Italy and the Mediterranean.",
    url: "https://maisonamoret.com",
    siteName: "Maison Amoret",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Amoret — Luxury Wedding Design",
    description:
      "Extraordinary weddings, designed across Italy and the Mediterranean.",
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
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
