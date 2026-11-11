import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alnaciim.com"),
  title: {
    default: "Alnaciim Group | Powering Life. Purifying Tomorrow.",
    template: "%s | Alnaciim Group",
  },
  description:
    "Alnaciim Group is a leading East African infrastructure conglomerate specializing in water purification, renewable energy systems, and industrial engineering.",
  applicationName: "Alnaciim Group",
  authors: [{ name: "Alnaciim Group", url: "https://alnaciim.com" }],
  creator: "Alnaciim Group",
  publisher: "Alnaciim Group",
  alternates: {
    canonical: "https://alnaciim.com",
  },
  keywords: [
    "Alnaciim",
    "Alnaciim Group",
    "Alnaciim Water",
    "Alnaciim Energy",
    "Alnaciim Engineering",
    "Aqua Safi",
    "Water Infrastructure Somalia",
    "Renewable Energy East Africa",
    "Solar Energy Somalia",
    "Reverse Osmosis Systems",
    "Industrial Engineering Somalia",
    "Garowe Puntland Infrastructure",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Alnaciim Group | Powering Life. Purifying Tomorrow.",
    description:
      "Alnaciim Group is a leading East African infrastructure conglomerate specializing in water purification, renewable energy systems, and industrial engineering.",
    url: "https://alnaciim.com",
    siteName: "Alnaciim Group",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alnaciim Group - Powering Life. Purifying Tomorrow.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alnaciim Group | Powering Life. Purifying Tomorrow.",
    description:
      "Alnaciim Group is a leading East African infrastructure conglomerate specializing in water purification, renewable energy systems, and industrial engineering.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://alnaciim.com/#organization",
      "name": "Alnaciim Group",
      "alternateName": ["Alnaciim", "ALNACIIM"],
      "url": "https://alnaciim.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://alnaciim.com/#logo",
        "url": "https://alnaciim.com/logo.png",
        "contentUrl": "https://alnaciim.com/logo.png",
        "caption": "Alnaciim Group Logo",
      },
      "image": "https://alnaciim.com/logo.png",
      "description":
        "Alnaciim Group is an East African infrastructure conglomerate specializing in water purification, renewable energy systems, and industrial engineering.",
      "foundingDate": "1998",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Garowe",
        "addressRegion": "Puntland",
        "addressCountry": "SO",
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "url": "https://alnaciim.com/contact",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://alnaciim.com/#website",
      "url": "https://alnaciim.com",
      "name": "Alnaciim Group",
      "alternateName": ["Alnaciim", "ALNACIIM"],
      "publisher": {
        "@id": "https://alnaciim.com/#organization",
      },
    },
  ],
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${outfit.variable} ${playfair.variable} h-full antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Navbar />
        <main className="flex-1 w-full flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
