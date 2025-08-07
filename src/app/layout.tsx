import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Respectfully Disruptive | Full-Stack Digital Strategy, Design & Engineering",
    template: "%s | Respectfully Disruptive",
  },
  description:
    "Respectfully Disruptive is a full-stack digital strategy, design, and engineering studio. We build new ventures and modernize established products through brand, UX/UI, and custom software at scale.",
  keywords: [
    "digital strategy consultancy",
    "product design agency",
    "UI UX design",
    "full-stack development",
    "custom software development",
    "brand strategy",
    "infrastructure engineering",
    "DevOps automation",
    "venture studio",
    "Sweden tech agency",
  ],
  metadataBase: new URL("https://respectfullydisruptive.com"),
  alternates: {
    canonical: "https://respectfullydisruptive.com",
  },
  openGraph: {
    title: "Respectfully Disruptive | Strategy • Design • Engineering",
    description:
      "Respectfully Disruptive is a full-stack digital strategy, design, and engineering studio. We build new ventures and modernize established products through brand, UX/UI, and custom software at scale.",
    url: "https://respectfullydisruptive.com",
    siteName: "Respectfully Disruptive",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Respectfully Disruptive – Strategy to Scale",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Respectfully Disruptive | Strategy • Design • Engineering",
    description:
      "Respectfully Disruptive is a full-stack digital strategy, design, and engineering studio. We build new ventures and modernize established products through brand, UX/UI, and custom software at scale.",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
