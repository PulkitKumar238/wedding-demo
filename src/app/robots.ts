import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

/**
 * Everything on this site is meant to be indexed except the enquiry endpoint.
 * The sitemap link is what points crawlers at the full URL list.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
