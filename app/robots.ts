import type { MetadataRoute } from "next";
import { profileConfig } from "@/data/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${profileConfig.siteUrl}/sitemap.xml`,
  };
}
