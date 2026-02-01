import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://izradi-sajt.com'),
  title: {
    default: "Izrada Web Sajtova Beograd | Profesionalna Izrada Web Stranica - Izradi-Sajt.com",
    template: "%s | Izrada Web Sajtova Beograd",
  },
  description: "Profesionalna izrada web sajtova i aplikacija u Beogradu. Moderan dizajn, SEO optimizacija, responzivni sajtovi po pristupačnim cenama. Takođe nudim pomoć sa studentskim radovima iz web programiranja. Besplatan konsultacioni poziv!",
  keywords: [
    // Glavne keywords
    "izrada web sajtova",
    "izrada web sajta",
    "izradite sajt",
    "pravljenje web sajtova",
    "izrada web stranica",
    "kreiranje web sajta",

    // Lokalne keywords
    "izrada web sajtova beograd",
    "web developer beograd",
    "web dizajn beograd",
    "izrada sajtova srbija",

    // Long-tail keywords
    "cena izrade web sajta",
    "koliko kosta izrada sajta",
    "profesionalna izrada sajtova",
    "moderna izrada web sajta",
    "responzivni web sajt",

    // Studentski radovi
    "studentski radovi programiranje",
    "diplomski rad web programiranje",
    "seminarski rad web",
    "izrada web aplikacija",

    // Tehnologije
    "react developer beograd",
    "next.js developer",
    "full stack developer srbija",
    "freelance web developer",

    // Brand
    "nikola kremic",
    "izradi-sajt.com",
  ],
  authors: [{ name: "Nikola Kremić" }],
  creator: "Nikola Kremić",
  publisher: "Izradi-Sajt.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: 'https://izradi-sajt.com',
    languages: {
      'sr-RS': 'https://izradi-sajt.com',
      'en-US': 'https://izradi-sajt.com?lang=en',
    },
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://izradi-sajt.com",
    siteName: "Izrada Web Sajtova Beograd | Izradi-Sajt.com",
    title: "Izrada Web Sajtova Beograd | Profesionalna Izrada Web Stranica",
    description: "Profesionalna izrada web sajtova i aplikacija u Beogradu. Moderan dizajn, SEO optimizacija, responzivni sajtovi po pristupačnim cenama.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Izrada Web Sajtova Beograd | Profesionalna Izrada Web Stranica",
    description: "Profesionalna izrada web sajtova i aplikacija. Moderan dizajn, SEO optimizacija, responzivni sajtovi.",
    creator: "@kremic_nikola",
  },
  verification: {
    google: "uMLtxuOe47Bgw0d5QrHc7b1neaP6SgnkrjzhQ2a8KpI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} antialiased bg-[var(--bg-primary)]`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
