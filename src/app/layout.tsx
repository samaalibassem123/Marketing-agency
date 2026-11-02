import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";
import { LanguageProvider } from "@/context/LanguageContext";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KONTRAST | Premium Digital Growth Agency — Tunis & Global",
    template: "%s | KONTRAST Digital Agency",
  },
  description:
    "We build digital experiences that move businesses forward. Full-service digital growth partner in Tunisia delivering bespoke web development, branding, digital marketing, AI automation, and high-impact media production.",
  keywords: [
    "digital agency Tunisia",
    "web development Tunis",
    "branding agency",
    "digital marketing Tunis",
    "AI automation",
    "creative studio",
  ],
  authors: [{ name: "KONTRAST Digital Studio" }],
  creator: "KONTRAST",
  metadataBase: new URL("https://kontrast-agency.tn"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kontrast-agency.tn",
    title: "KONTRAST — Digital Growth Partner",
    description:
      "From bold brand identities to powerful websites and digital strategies, we help businesses turn ideas into measurable growth.",
    siteName: "KONTRAST Digital Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "KONTRAST — Premium Digital Growth Agency",
    description:
      "We build digital experiences that move businesses forward.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={manrope.variable}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#0A0A0A] text-[#FFFFFF] font-sans antialiased selection:bg-white selection:text-black flex flex-col font-normal"
      >
        <LanguageProvider>
          <Navbar />
          <SmoothScroll>
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
