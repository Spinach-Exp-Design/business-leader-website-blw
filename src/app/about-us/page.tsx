import AboutUs from "@/pages/About-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Rajesh Krishnamoorthy | Director & Strategic Advisor",
  description:
    "Meet Rajesh Krishnamoorthy: Independent ethics proponent and boardroom advisor with 25+ years of experience. Blending practical governance with systems thinking and long-term value creation. From financial markets to educational ecosystems, bringing clarity and integrity to complex decisions.",
  // Canonical URL always points to production domain
  alternates: {
    canonical: "https://krishnamoorthy.one/about-us",
  },
  openGraph: {
    title: "About | Rajesh Krishnamoorthy | Director & Strategic Advisor",
    description:
      "Independent ethics proponent and boardroom advisor with 25+ years of experience. Blending practical governance with systems thinking and long-term value creation across financial markets, boards, and educational ecosystems.",
    url: "https://krishnamoorthy.one/about-us",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Rajesh Krishnamoorthy | Director & Strategic Advisor",
    description:
      "Independent ethics proponent and boardroom advisor with 25+ years of experience. Blending practical governance with systems thinking and long-term value creation.",
  },
};

export default function Page() {
  return <AboutUs />;
}
