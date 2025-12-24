import { MetadataRoute } from "next";

/**
 * Environment-based robots.txt generation
 * Production: Allow crawling and include sitemap
 * Staging/Preview: Block all crawling
 */
export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.NEXT_PUBLIC_ENV === "production";
  const productionDomain = "https://krishnamoorthy.one";

  if (isProduction) {
    // Production: Allow all crawlers and include sitemap
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: `${productionDomain}/sitemap.xml`,
    };
  }

  // Staging/Preview: Block all crawlers
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}

