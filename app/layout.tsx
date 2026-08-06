import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bryan Palad | Software Developer",
  description:
    "Portfolio of Bryan Palad, a software developer and frontend engineer based in the Philippines.",
  metadataBase: new URL("https://bryanpalad.vercel.app"),
  icons: {
    icon: "/heroImg/BryanPalad2.png",
    shortcut: "/heroImg/BryanPalad2.png",
    apple: "/heroImg/BryanPalad2.png",
  },
  openGraph: {
    title: "Bryan's Portfolio",
    description: "A modern & minimalist web developer portfolio.",
    url: "https://bryanpalad.vercel.app",
    siteName: "Bryan's Portfolio",
    images: [
      {
        url: "/BryanThumbnail.PNG",
        width: 1200,
        height: 630,
        alt: "Bryan's Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan's Portfolio",
    description: "A modern & minimalist web developer portfolio.",
    images: ["/BryanThumbnail.PNG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
