import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/shared/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date("2026-06-28T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
