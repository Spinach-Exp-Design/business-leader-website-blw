import HomePage from "@/pages/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rajesh Krishnamoorthy | Independent Director & Strategic Advisor",
  description:
    "Decode complexity and discover clarity with Rajesh Krishnamoorthy. Independent director, boardroom advisor, and strategic consultant specializing in ethical governance, systems thinking, and long-term value creation. Expert guidance for CXOs, board members, and organizations.",
  // Canonical URL always points to production domain
  alternates: {
    canonical: "https://krishnamoorthy.one",
  },
  openGraph: {
    title: "Rajesh Krishnamoorthy | Independent Director & Strategic Advisor",
    description:
      "Decode complexity and discover clarity with Rajesh Krishnamoorthy. Independent director, boardroom advisor, and strategic consultant specializing in ethical governance, systems thinking, and long-term value creation.",
    url: "https://krishnamoorthy.one",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajesh Krishnamoorthy | Independent Director & Strategic Advisor",
    description:
      "Decode complexity and discover clarity. Expert boardroom advisor specializing in ethical governance, systems thinking, and long-term value creation for organizations.",
  },
};

export default function Page() {
  return <HomePage />;
}
