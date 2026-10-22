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
const siteUrl = "https://www.kadekmultiservices.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
   title:"Kadek Multiservices Ltd.",
  //  {
  //   default: "Professional Land Surveyors in [Nigeria]",
  //   template: "%s | [Kadek Multiservices Ltd.]",
  // },
  description:
    "Professional land surveying, boundary surveys, topographic surveys and land demarcation in [Osun State]. Contact our team for a survey quotation.",
  applicationName: "[Kadek Multiservices Ltd.]",
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "[Kadek Multiservices Ltd.]",
    title: "Professional Land Surveyors in [Nigeria]",
    description: "Reliable land surveying and property measurement services.",
    url: siteUrl,
    images: [
      {
        url: "https://images.unsplash.com/photo-1682663810771-89d21838530f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        width: 1200,
        height: 630,
        alt: "GNSS",
      },
    ],
  },
   twitter: {
    card: "summary_large_image",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
