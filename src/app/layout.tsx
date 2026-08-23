import { Footer } from "@/components/layout";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  "https://pricing-component-with-toggle.abdelrhman-ahmed8881.workers.dev";

const title = "Our Pricing | Monthly or annual storage plans";
const description =
  "Compare the Basic, Professional and Master plans, switch between monthly and annual billing, and see the storage, seats and transfer limit each tier includes.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Our Pricing, with its three plan cards and billing toggle.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Storage plans",
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} antialiased`}>
      <body className="relative flex min-h-dvh flex-col v-page">
        {children}
        <Footer />
      </body>
    </html>
  );
}
