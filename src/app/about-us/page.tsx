import AboutUs from "@/pages/About-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our mission to empower business leaders with proven strategies and insights. Discover our approach to transforming leadership and building lasting organizational success.",
  // Canonical URL always points to production domain
  alternates: {
    canonical: "https://krishnamoorthy.one/about-us",
  },
  openGraph: {
    title: "About Us | Krishnamoorthy",
    description:
      "Learn about our mission to empower business leaders with proven strategies and insights. Discover our approach to transforming leadership and building lasting organizational success.",
    url: "https://krishnamoorthy.one/about-us",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Krishnamoorthy",
    description:
      "Learn about our mission to empower business leaders with proven strategies and insights. Discover our approach to transforming leadership.",
  },
};

export default function Page() {
  return <AboutUs />;
}
