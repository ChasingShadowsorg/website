import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chasing Shadows - Paranormal Investigations in New England",
  description: "Dedicated team exploring haunted locations across New England. Documenting the unknown with respect and cutting-edge technology.",
  openGraph: {
    title: "Chasing Shadows",
    description: "Paranormal Investigations Across New England",
    url: "https://chasingshadows.org", // Replace with actual domain if different
    siteName: "Chasing Shadows",
    images: [
      {
        url: "/logo.png",
        width: 200,
        height: 200,
        alt: "Chasing Shadows Logo",
      },
    ],
    locale: "en_US",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
