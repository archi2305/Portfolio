import type { MetadataRoute } from "next";
import { profileConfig } from "@/data/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: profileConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
