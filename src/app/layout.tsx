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
  metadataBase: new URL("https://vivahaatelier.com"),
  title: {
    default: "Vivaha Atelier — Luxury Indian Wedding Design, Jaipur & Beyond",
    template: "%s — Vivaha Atelier",
  },
  description:
    "Vivaha Atelier is a luxury wedding design house based in Jaipur, crafting extraordinary Indian celebrations across Rajasthan, Delhi NCR, Goa and beyond.",
  keywords: [
    "luxury wedding planner India",
    "destination wedding Jaipur",
    "Udaipur palace wedding planner",
    "Indian wedding design",
    "mehendi sangeet haldi decor",
  ],
  openGraph: {
    title: "Vivaha Atelier — Luxury Indian Wedding Design, Jaipur & Beyond",
    description:
      "Extraordinary Indian weddings, designed across Rajasthan and beyond.",
    url: "https://vivahaatelier.com",
    siteName: "Vivaha Atelier",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivaha Atelier — Luxury Indian Wedding Design",
    description:
      "Extraordinary Indian weddings, designed across Rajasthan and beyond.",
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
