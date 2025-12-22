import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const generalSans = localFont({
  src: [
    {
      path: "../fonts/General-sans/Fonts/WEB/fonts/GeneralSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/General-sans/Fonts/WEB/fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/General-sans/Fonts/WEB/fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/General-sans/Fonts/WEB/fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
});

const allison = localFont({
  src: "../fonts/Allison/Allison-Regular.ttf",
  variable: "--font-allison",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://krishnamoorthy.one"),
  title: {
    default: "Krishnamoorthy | Transforming Leaders, Building Legacies",
    template: "%s | Krishnamoorthy",
  },
  description:
    "Expert business leadership consulting and strategic guidance to help executives and entrepreneurs build lasting impact. Transform your leadership journey with proven strategies and insights.",
  keywords: [
    "business leadership",
    "executive coaching",
    "leadership development",
    "strategic consulting",
    "business transformation",
    "executive leadership",
  ],
  authors: [{ name: "Krishnamoorthy" }],
  creator: "Krishnamoorthy",
  publisher: "Krishnamoorthy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krishnamoorthy.one",
    siteName: "Krishnamoorthy",
    title: "Krishnamoorthy | Transforming Leaders, Building Legacies",
    description:
      "Expert business leadership consulting and strategic guidance to help executives and entrepreneurs build lasting impact. Transform your leadership journey with proven strategies and insights.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishnamoorthy | Transforming Leaders, Building Legacies",
    description:
      "Expert business leadership consulting and strategic guidance to help executives and entrepreneurs build lasting impact.",

    creator: "@krishnamoorthy", // Update with actual Twitter handle
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
  verification: {
    // google: "your-google-verification-code", // Add when you have it
    // yandex: "your-yandex-verification-code",
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
        className={`${playfairDisplay.variable} ${generalSans.variable} ${allison.variable} antialiased overflow-x-hidden bg-primary-light`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
