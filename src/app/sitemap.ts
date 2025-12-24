import { MetadataRoute } from "next";

/**
 * Production-only sitemap generation
 * Production: Generate full sitemap with all routes
 * Staging/Preview: Return empty sitemap to effectively disable /sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const isProduction = process.env.NEXT_PUBLIC_ENV === "production";
  const productionDomain = "https://krishnamoorthy.one";

  // Non-production: Return empty sitemap to prevent exposure
  if (!isProduction) {
    return [];
  }

  // Production: Generate sitemap with all routes
  // All URLs use production domain regardless of deployment environment
  return [
    {
      url: `${productionDomain}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${productionDomain}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

