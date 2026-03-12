import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import MessengerButton from "@/components/MessengerButton";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Bryan Palad - Professional CV",
  description: "Professional CV portfolio for Bryan Palad",
  metadataBase: new URL("https://bryanpalad.vercel.app"),
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
    <html lang="en">
      <body className={`${sourceSans.variable} ${lora.variable} font-sans`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <MessengerButton />
          </ThemeProvider>  
      </body>
    </html>
  );
}
