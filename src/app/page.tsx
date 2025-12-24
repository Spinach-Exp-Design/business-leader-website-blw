import HomePage from "@/pages/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover transformative leadership strategies and insights. Join successful executives and entrepreneurs who have elevated their leadership impact and built thriving organizations.",
  // Canonical URL always points to production domain
  alternates: {
    canonical: "https://krishnamoorthy.one",
  },
  openGraph: {
    title: "Krishnamoorthy | Transforming Leaders, Building Legacies",
    description:
      "Discover transformative leadership strategies and insights. Join successful executives and entrepreneurs who have elevated their leadership impact and built thriving organizations.",
    url: "https://krishnamoorthy.one",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishnamoorthy | Transforming Leaders, Building Legacies",
    description:
      "Discover transformative leadership strategies and insights. Join successful executives and entrepreneurs who have elevated their leadership impact.",
  },
};

export default function Page() {
  return <HomePage />;
}
