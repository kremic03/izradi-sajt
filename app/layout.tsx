import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nikola Kremić | Freelance Web Developer",
    template: "%s | Nikola Kremić",
  },
  description: "Profesionalna izrada web sajtova i aplikacija. Moderan dizajn, responsive, optimizovano. Takođe radim studentske radove iz web programiranja.",
  keywords: ["web developer", "freelancer", "react", "next.js", "web sajt", "web aplikacija", "studentski radovi", "srbija", "nikola kremić", "izrada sajtova", "beograd"],
  authors: [{ name: "Nikola Kremić" }],
  creator: "Nikola Kremić",
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
  openGraph: {
    title: "Nikola Kremić | Freelance Web Developer",
    description: "Profesionalna izrada web sajtova i aplikacija. Moderan dizajn, responsive, optimizovano.",
    type: "website",
    locale: "sr_RS",
    siteName: "Nikola Kremić Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikola Kremić | Freelance Web Developer",
    description: "Profesionalna izrada web sajtova i aplikacija",
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
      <body className={`${inter.variable} antialiased bg-[var(--bg-primary)]`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
